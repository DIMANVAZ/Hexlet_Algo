import nock from 'nock';
import createHttpClient from '../src/index.js';
import createApp from '../src/app.js';

const createRequestParams = (data = null, params = {}) => ((data === null)
    ? [{ params }, {}]
    : [data, { headers: { 'Content-Type': 'application/json' }, params }]);

const positiveCases = [
    ['get', ...createRequestParams(), // первая строка - название метода и передаваемые параметры (body, query string, headers)
        { ok: true, status: 200, data: [] }], // вторая строка - ожидаемый ответ
    ['post', ...createRequestParams({ username: 'hello', password: 'world' }),
        { ok: true, status: 201, data: [] }],
    ['get', ...createRequestParams(),
        { ok: true, status: 200, data: ['hello'] }],
    ['patch', ...createRequestParams({ username: 'hello', password: 'kitty' }),
        { ok: true, status: 201, data: [] }],
    ['get', ...createRequestParams(),
        { ok: true, status: 200, data: ['hello'] }],
    ['post', ...createRequestParams({ username: 'foo', password: 'bar' }, { returnUsers: true }),
        { ok: true, status: 200, data: ['hello', 'foo'] }],
    ['get', ...createRequestParams(null, { partOfName: 'foo' }),
        { ok: true, status: 200, data: ['foo'] }],
    ['get', ...createRequestParams(null, { partOfName: 'bar' }),
        { ok: true, status: 200, data: [] }],
    ['delete', ...createRequestParams(null, { username: 'hello' }),
        { ok: true, status: 201, data: [] }],
    ['get', ...createRequestParams(),
        { ok: true, status: 200, data: ['foo'] }],
];

const negativeCases = [
    ['post', ...createRequestParams({ username: 'foo' }),
        { ok: false, status: 400, data: 'Password is a required field' }],
    ['post', ...createRequestParams({ username: 'foo', password: 'bar' }),
        { ok: false, status: 400, data: 'Student with name "foo" already exists' }],
    ['patch', ...createRequestParams({ username: 'foo', password: 'bar' }, { validate: true }),
        { ok: false, status: 400, data: 'The new password is identical to the old one' }],
    ['patch', ...createRequestParams({ username: 'hello', password: 'kitty' }),
        { ok: false, status: 400, data: 'Student with name "hello" not found' }],
];

const baseURL = 'http://site.com';
const route = '/students';
const clients = [
    'fetch',
    'axios',
];

describe.each(clients)('Positive cases: %s', (clientName) => {
    beforeAll(() => {
        const scope = nock(baseURL).persist();

        const app = createApp();
        const map = {
            GET: app.get,
            POST: app.add,
            PATCH: app.update,
            DELETE: app.remove,
        };

        const bodyParser = {
            string: (body) => JSON.parse(body || '{}'), // fetch требует приводить body к строке
            object: (body) => body,
        };
        Object.entries(map)
            .forEach(([method, handler]) => {
                scope
                    .intercept(route, method)
                    .query(true)
                    .reply((uri, body) => {
                        try {
                            // query string является частью uri
                            const query = Object.fromEntries(new URL(uri, baseURL).searchParams);
                            const parsedBody = bodyParser[typeof body](body);
                            const result = handler({ ...parsedBody, ...query });
                            return result ? [200, result] : [201, []];
                        } catch (err) {
                            return [400, err.message];
                        }
                    });
            });
    });

    afterAll(() => nock.cleanAll());

    const httpClient = createHttpClient(clientName);
    const instance = httpClient({ baseURL });

    test.each(positiveCases)(`correct %s ${route} with %o`, async (method, body, params, expected) => {
        const response = await instance[method](route, body, params);
        const { ok, status } = response;
        const actual = response.json().then((data) => ({ ok, status, data }));
        await expect(actual).resolves.toEqual(expected);
    });

    test.each(negativeCases)(`incorrect %s ${route} with %o`, async (method, body, params, expected) => {
        const response = await instance[method](route, body, params);
        const { ok, status } = response;
        // ошибки с сервера, например, 400 Bad Request попадают в then
        const actual = response.text().then((data) => ({ ok, status, data }));
        await expect(actual).resolves.toEqual(expected);
    });
});
