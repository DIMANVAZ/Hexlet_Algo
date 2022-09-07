/*  Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины вложенности
значение по указанным ключам. Параметры:
    Исходный объект
    Цепочка ключей (массив), по которой ведётся поиск значения
В случае, когда добраться до значения невозможно, возвращается null.*/

function get(obj, keysArray){
    for (let i = 0; i < keysArray.length; i++) {
        if(!Object.hasOwn(obj, keysArray[i])){
            obj = null;
            break;
        }
        obj = obj[keysArray[i]];
    }
    return obj;
}

const data2 = {
    user: 'ubuntu',
    hosts: {
        0: {
            name: 'web1',
        },
        1: {
            name: 'web2',
            null: 3,
            active: false,
            company: {
                name: 'hexlet',
            },
        },
    },
};

console.log(get(data2, [null])); // null
console.log(get(data2, ['undefined'])); // null
console.log(get(data2, ['user'])); // 'ubuntu'
console.log(get(data2, ['user', 'ubuntu'])); // null
console.log(get(data2, ['hosts', 1, 'name'])); // 'web2'
console.log(get(data2, ['hosts', 5])); // null
console.log(get(data2, ['hosts', 0])); // { name: 'web1' }
console.log(get(data2, ['hosts', 1, null])); // 3
console.log(get(data2, ['user', 'name','name'])); // null
console.log(get(data2, ['hosts', 1, 'active'])); // false
console.log(get(data2, ['hosts', 1, 'company', 'name'])); //'hexlet'

console.log(structuredClone(data2))