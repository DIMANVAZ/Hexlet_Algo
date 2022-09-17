import axios from 'axios';

const axiosAdapter = (config) => { // конфиг типа { baseURL: 'http://localhost:8080' };
    const instance = axios.create(config); // инстанс создан? c конфигой всё в порядке

    // BEGIN (write your solution here)
    async function processResult(promise){ // принимает промис, разрешает его ? преобразуя в новый формат, передаёт дальше
        return promise.then(axiosResp => {

            let ok = false;
            if (axiosResp.status >= 200 && axiosResp.status <= 226){
                ok = true;
            }
            return {
                status: axiosResp.status,
                ok: ok,
                async json(){
                    return axiosResp.data;
                },
                async text(){
                    return axiosResp.data.toString();
                }
            }
        })

    }
    // END

    return {  // возвращается объект, полный методов - каждый возвращает функцию принимающую промис
        get: (route, params) => processResult(instance.get(route, params)),
        delete: (route, params) => processResult(instance.delete(route, params)),
        // BEGIN (write your solution here)
        post: (route, params) => processResult(instance.post(route, params)),
        patch: (route, params) => processResult(instance.patch(route, params))
        // END
    };
};

export default axiosAdapter;

/*Реализуйте обработчик ответа для axios и два метода HTTP-клиента: post, patch.

Обработчик ответа должен возвращать объект, аналогичный ответу fetch, со следующими свойствами:

ok - результат выполнения запроса
status - код HTTP-ответа
json() - функция, возвращающая Promise. После его разрешения отдаётся JSON-ответ ресурса (body)
text() - функция, возвращающая Promise. После его разрешения отдаётся текстовый ответ ресурса (body)*/



// axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => console.log(
//     res, '\n---------------------------------------^ this was axios^-----'));
//
// fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => console.log(
//     res, '\n----------------------------------------------^ this was fetch^----------'));
