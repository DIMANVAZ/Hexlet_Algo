import fetchAdapter from './fetchAdapter.js';
import axiosAdapter from './axiosAdapter.js';

// BEGIN (write your solution here)
// Реализуйте и экспортируйте по умолчанию функцию, возвращающую адаптер HTTP-клиента по его названию.
export default function createHttpClient (nameOfAdapter){
    const table = {
        'axios':axiosAdapter,
        'fetch':fetchAdapter
    }
    return table[nameOfAdapter]; // это не класс
}

// END

