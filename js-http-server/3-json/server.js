// @ts-check
/* Реализуйте обработчик адреса /users.json. Он должен отдавать данные в следующем формате:
{
  "meta": { "page": 5, "perPage": 2, "totalPages": 500  },
  "data": [
    { "name": "Mrs. Marlee Lesch", "phone": "(412) 979-7311" },
    { "name": "Mrs. Mabelle Cormier", "phone": "307.095.4754" }
  ]
}

Этот вызов должен поддерживать пагинацию (pagination, постраничный вывод) результата. За это отвечают два параметра запроса:

    page - текущая запрошенная страница. По умолчанию 1.
    perPage - количество возвращенных данных на страницу. По умолчанию 10.
Пример:

$ curl "localhost:8080/users.json?page=2&perPage=3"
    {
      meta: { page: 2, perPage: 3, totalPages: 334 },
      data: [
        { name: "Liam Wiegand", phone: "1-327-988-3382" },
        { name: "Lonny McGlynn", phone: "(935) 384-0149" },
        { name: "Dr. Faustino Bailey", phone: "746-901-8330" }
      ]
    };
*/

import http from 'http';
import * as url from "url";

export default (usersById) => http.createServer((request, response) => {
    request.on('error', (err) => {
        console.error(err.stack);
    });
    request.on('end', () => {
        if (request.url === '/') {
            const messages = [
                'Welcome to The Phonebook',
                `Records count: ${Object.keys(usersById).length}`,
            ];
            response.end(messages.join('\n'));
        } else if (request.url.startsWith('/search.json')) {
            response.setHeader('Content-Type', 'application/json');

            const url = new URL(request.url, `http://${request.headers.host}`);
            const q = url.searchParams.get('q');
            const normalizedSearch = q ? q.trim().toLowerCase() : '';

            const result = Object.values(usersById)
                .filter((user) => user.name.toLowerCase().includes(normalizedSearch));

            response.end(JSON.stringify(result));
        } else if (request.url.startsWith('/users.json')) {
            // BEGIN (write your solution here)
                response.setHeader('Content-Type', 'application/json');
                const finalResp = {meta: {}, data:[]};
                const totalRecords = Object.keys(usersById).length;
                const urlObj = url.parse(request.url, true);
                const page = +urlObj.query.page || 1;
                const perPage = +urlObj.query.perPage || 10;
                        finalResp.meta = {page, perPage, totalPages:Math.ceil(totalRecords/perPage)}

                        const startIndex = ((page-1) * perPage) + 1;
                            console.log(page, perPage, startIndex);
                        for (let i = startIndex; i < (+startIndex + +perPage); i++) {
                            finalResp.data.push(usersById[i])
                        }
                response.end(JSON.stringify(finalResp));
            // END
        }
    });
    request.resume();
});
