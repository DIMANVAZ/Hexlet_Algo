import yup from 'yup';
import createHttpClient from './index.js';
/* eslint-disable no-template-curly-in-string */

const createApp = () => {
    const database = {
        students: [],
    };

    // partOfName приходит в query string
    const get = ({ partOfName = '' }) => {
        const filtered = database.students.filter((student) => student.username.includes(partOfName));
        return filtered.map(({ username }) => username);
    };

    // username приходит в query string
    const remove = ({ username }) => {
        database.students = database.students.filter((student) => student.username !== username);
    };

    // returnUsers приходит в query string, а username и password в теле запроса
    const add = (newStudent) => {
        const { username, password, returnUsers } = yup.object().shape({
            username: yup.string().required()
                .test('already exists',
                    'Student with name "${originalValue}" already exists',
                    (name) => !database.students.some((user) => user.username === name)),
            password: yup.string().required('Password is a required field'),
            returnUsers: yup.boolean().optional().default(false),
        }).validateSync(newStudent);

        database.students = database.students.concat({ username, password });
        return (returnUsers) ? get({}) : null;
    };

    // validate приходит в query string, а username и password в теле запроса
    const update = ({ username, password, validate }) => {
        const user = database.students.find((student) => student.username === username);

        yup.object().shape({
            username: yup.string().required('')
                .test('not found',
                    'Student with name "${originalValue}" not found',
                    () => user),
            validate: yup.boolean().optional().default(false),
            password: yup.string().when('validate', {
                is: true,
                then: yup.string().required()
                    .test('password is identical', 'The new password is identical to the old one',
                        (newPassword) => user.password !== newPassword),
                otherwise: yup.string().required(),
            }),
        }).validateSync({ username, password, validate });

        user.password = password;
    };

    return {
        get,
        add,
        update,
        remove,
    };
};

export default createApp;

const httpClient = createHttpClient('axios');
// клиент создаётся как инстанс axios
const instance = httpClient({ baseURL: 'http://localhost:8080' }); // axios.create(config)
// клиент содержит методы, подобно axios
const response = await instance.post('/students', { username: 'hello', password: 'world' }); // axios.post(url, data)
// get-запрос с query string на http://site.com/user?username=hello
const userNames = await instance.get('/students', { params: { partOfName: 'hel' } }); // axios.get(url, params)
// ошибки с сайта не выбрасываются, а считаются валидным ответом. Как в fetch
const failedRequest = await instance.post('/students', { username: 'foo' }, { returnUsers: true }); // axios.post(url, data, params)

// ответы от клиента подобны fetch
console.log(response.ok); // => true
console.log(response.status); // => 201
console.log(userNames.ok); // => true
console.log(userNames.status); // => 200
await userNames.json(); // ['hello']

console.log(failedRequest.ok); // => false
console.log(failedRequest.status); // => 400
await failedRequest.text(); // "Не указано имя или пароль"