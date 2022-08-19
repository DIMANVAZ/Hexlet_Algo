// @ts-check
/*Реализуйте маршрут /users/(\\w+).json, по которому будет доступна информация о конкретной записи из справочника. Данные отдаются в формате json, поэтому обязательно нужно выставить правильный media type.

$ curl localhost:4000/users/5.json
{"data":{"name":"Lonny McGlynn","phone":"(935) 384-0149"}}
Если такой записи не существует, необходимо вернуть код ответа 404 и пустое тело.*/

import http from 'http';

const getParams = (address, host) => {
    const url = new URL(address, `http://${host}`);
    return Object.fromEntries(url.searchParams);
};

const router = {
    GET: {
        '/users/(\\w+).json': (req, res, matches, usersById) => {
            // BEGIN (write your solution here)
            res.setHeader('Content-Type', 'application/json');
            const match = usersById[matches[1]];
            if(match){
                res.end(JSON.stringify({data:match}));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify(''));
            }
            // END
        },
        '/': (req, res, matches, usersById) => {
            const messages = [
                'Welcome to The Phonebook',
                `Records count: ${Object.keys(usersById).length}`,
            ];
            res.end(messages.join('\n'));
        },

        '/search.json': (req, res, matches, usersById) => {
            res.setHeader('Content-Type', 'application/json');

            const { q = '' } = getParams(req.url, req.headers.host);
            const normalizedSearch = q.trim().toLowerCase();
            const ids = Object.keys(usersById);

            const usersSubset = ids
                .filter((id) => usersById[id].name.toLowerCase().includes(normalizedSearch))
                .map((id) => usersById[id]);
            res.end(JSON.stringify({ data: usersSubset }));
        },

        '/users.json': (req, res, matches, usersById) => {
            res.setHeader('Content-Type', 'application/json');

            const { page = 1, perPage = 10 } = getParams(req.url, req.headers.host);
            const ids = Object.keys(usersById);

            const usersSubset = ids.slice((page * perPage) - perPage, page * perPage)
                .map((id) => usersById[id]);
            const totalPages = Math.ceil((ids.length) / perPage);
            res.end(JSON.stringify({ meta: { page, perPage, totalPages }, data: usersSubset }));
        },
    },
};

export default (users) => http.createServer((request, response) => {
    const { pathname } = new URL(request.url, `http://${request.headers.host}`);
    const routes = router[request.method];

    const result = pathname && Object.keys(routes).find((str) => {
        const regexp = new RegExp(`^${str}$`);
        const matches = pathname.match(regexp);

        if (!matches) {
            return false;
        }

        routes[str](request, response, matches, users);
        return true;
    });

    if (!result) {
        response.writeHead(404);
        response.end();
    }
});
