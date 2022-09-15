/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход объект базы данных
и меняет в нём ключи и значения местами.

swapKeyValue — полиморфная функция, она может работать с любой реализацией key-value, имеющей такой же интерфейс.*/

import InMemoryKV from './InMemoryKV.js';

export default function swapKeyValue(incoming={}){
    // в нашей же базе данных надо поменять местами ключи и значения.
    const wholeEntries = Object.entries(incoming.toObject()); // [[k1,v1],[k2,v2]]
    const reverted = wholeEntries.map(kvPair => {
        const [k,v] = kvPair;
        return [v,k]
    })

    wholeEntries.forEach(([key]) => {
        incoming.unset(key);
    })

    reverted.forEach(vkPair => {
        const [v,k] = vkPair;
        incoming.set(v,k);
    })
    return incoming.toObject();
}

const map = new InMemoryKV({ key: 10 });
map.set('key2', 'value2');
console.log(swapKeyValue(map));
console.log(map.get('key')); // null
console.log(map.get(10)); // 'key'
console.log(map.get('value2')); // 'key2'

const map2 = new InMemoryKV({ foo: 'bar', bar: 'zoo' });
swapKeyValue(map2);

console.log(map2.toObject()); //{ bar: 'foo', zoo: 'bar' }

