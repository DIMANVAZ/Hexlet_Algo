import getFunction from './functions.js';

const get = getFunction();

/* Напишите тесты для функции get(obj, key, defaultValue).
Эта функция извлекает значение из объекта при условии, что ключ существует.
В ином случае возвращается defaultValue.

Тесты должны быть построены по такому же принципу, как это описывалось в теории урока:
проверка через if и исключение в случае провала теста.

Проверка, что
 - функция возвращает нужное значение по существующему ключу (прямой тест на работоспособность)
 - возвращается значение по умолчанию, если ключа нет
 - возвращается значение по существующему ключу, даже если передано значение по умолчанию (пограничный случай) */

//-------по-правильному (учителя):------------------

if (get({ key: 'value' }, 'key') !== 'value') {
    throw new Error('boom!');
}
if (get({}, 'key', 'value') !== 'value') {
    throw new Error('boom!');
}
if (get({ key: 'value' }, 'key', 'default value') !== 'value') {
    throw new Error('boom!');
}


//--------моя частная ерунда: ----------------------------
if (get({ hello: 'world' }, 'hello') !== 'world'){
    throw new Error('Не возвращает нужное значение по существующему ключу!');
}

if (get({ hello: 'world' }, 'hello','kitty') !== 'world'){
    throw new Error('Не возвращает нужное значение по существующему ключу!');
}

if (get({}, 'hello','kitty') !== 'kitty'){
    throw new Error('Не возвращает дефолтное значение!');
}

//----------------------------------------------------------------

// Идея функции взята из lodash
// https://lodash.com/docs#get
console.log(get({hello: 'world'}, 'hello')); // world
console.log(get({hello: 'world'}, 'hello', 'kitty')); // 'world'
console.log(get({}, 'hello', 'kitty')); // 'kitty'