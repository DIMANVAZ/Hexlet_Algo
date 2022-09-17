import fetch from 'node-fetch';

const fetchAdapter = (config) => {
    // BEGIN (write your solution here)
    function prepareUrl(route, params){ // эта штука должна подготовить УРЛ с параметрами запроса (если были переданы)!!
        let url = new URL(config.baseURL.concat(route));
        if(params){
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        }
        return url;
    }
    // END

    return {
        get: (route, { params, ...options }) => fetch(prepareUrl(route, params), options),
        delete: (route, { params, ...options }) => fetch(prepareUrl(route, params), {
            method: 'DELETE',
            ...options,
        }),
        // BEGIN (write your solution here)

        post: (url, data, params) => {
            return fetch(prepareUrl(url,params.params), {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            })},

        patch: (url, data, params) => {
            return fetch(prepareUrl(url, params.params), {
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            })},
        // END
    }
};

export default fetchAdapter;
/* Реализуйте обработчик параметров запроса для fetch и два метода HTTP-клиента: post, patch.

Каждый метод принимает параметры запроса по интерфейсу axios,
необходимо взять из него нужные данные, корректно сформировать query string, body и устанавливать правильный HTTP-метод. */