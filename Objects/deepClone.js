/*  Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.

Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект.
Если значением какого-то свойства является объект, то нужно рекурсивно запустить реализованную функцию.

Подсказки
Для рекурсивного запуска понадобится имя для функции
_.isObject()
Object.entries() */

export default function cloneDeep(source){
    let copy = {};
    const keyValuePairs = Object.entries(source);
    keyValuePairs.forEach(pair => {
        const [key, value] = pair;
        if(typeof value === 'object'){
            copy[key] = cloneDeep(value);
        } else copy[key] = value;
    })
    return copy;
}

const data = {
    key: 'value',
    key2: {
        key: 'innerValue',
        innerKey: {
            anotherKey: 'anotherValue',
        },
    },
};

const x = cloneDeep(data);
console.log(x);
console.log(x.key2.innerKey === data.key2.innerKey)