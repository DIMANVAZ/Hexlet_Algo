// @ts-check

import fs from 'fs/promises';
import _ from 'lodash';

import makeServer from './server.js';

export default async function index(port, callback = () => {}){
    const data = await fs.readFile('phonebook.txt');
    const users = data.toString()
        .trim()
        .split('\n')
        .map((value) => value.split('|').map((item) => item.trim()));
    const usersIds = users.map(([id]) => id);
    const usersData = users.map(([, name, phone]) => ({ name, phone }));
    const usersById = _.zipObject(usersIds, usersData);

    const server = makeServer(usersById);
    server.listen(port, callback.bind(null, server));
};
index(3333).then(()=> console.log('Index is working!'), ()=> console.log('error!'));

var sum = 0;
var steps = 0;
for (let i = 10; i <=190 ; i+=10) {
    sum = sum+i;
    steps+=1;
    console.log(sum,steps);
}