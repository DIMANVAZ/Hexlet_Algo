/* Сервер позволяет выполнять запросы на поиск всех записей, соответствующих критерию поиска.
Критерием является часть имени/фамилии, по которой производится сопоставление.

В запросе к серверу по ссылке /search необходимо передать один параметр: q, значением которого, будет подстрока.
В случае, если найдены сопоставления, то сервер возвращает данные в следующем формате (для подстроки miss):

    Miss Arlo Barrows, 328-949-3924
    Miss Bernadette Conn, 249.059.5515
    Miss Savannah Dicki, 157.463.3368
    Miss Rudy Brown, 779-703-0150`
Обратите внимание, что регистр при сопоставлении не учитывается.
В случае если запрос к серверу выполняется без параметров или соответствий не найдено, он должен вернуть пустую строку.*/

import http from 'http';
import * as url from "url";

export default (usersById) => http.createServer((request, response) => {
    request.on('end', () => {
        if (request.url === '/') {
            const messages = [
                'Welcome to The Phonebook',
                `Records count: ${Object.keys(usersById).length}`,
            ];
            response.end(messages.join('\n'));

        } else if (request.url.startsWith('/search')) {

            // BEGIN (write your solution here)
            const substr = url.parse(request.url,true).query.q?.toLowerCase();
                console.log('substr = ',substr);
            if(!substr){
                response.end('');
                return;
            }
            const users = Object.values(usersById);
                console.log('users length = ', users.length);
            const xz = users.reduce((acc,element) => {
                if(element.name.toLowerCase().indexOf(substr) > -1){
                    return acc + `${element.name}, ${element.phone}\n`
                } else return acc;
            },'')
            const resp = xz.slice(0,-1)||'';
            response.end(resp);
            // END
        }
    });

    request.resume();
});