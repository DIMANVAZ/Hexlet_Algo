/* Реализуйте логику парсинга файла phonebook.txt в следующий формат:
    {
      <id>: {
        name: <name>,
        phone: <phone>,
      },
      <id>: {
        name: <name>,
        phone: <phone>,
      },
    }
Где <id> - это идентификатор конкретной записи, а <name> и <phone> – это имя и телефон соответствующей записи.*/

import fs from 'fs/promises';

import makeServer from './server.js';

export default async function index(port, callback = () => {}){
    const data = await fs.readFile('phonebook.txt', 'utf-8');

    // BEGIN (write your solution here);
        const usersById = {};

        const usersArray = data.split('\n');
        usersArray.forEach(userString => {
            const [id,name,phone] = userString.split(' | ');
            usersById[id] = {name:name, phone:phone};
        })
    // END

    const server = makeServer(usersById);
    server.listen(port, () => callback(server));
};

index(3333).then(() => console.log('index works'))