/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход три параметра:
 - Количество раз, которое нужно применить функцию к аргументу (ряд последовательных вызовов, где каждому
 следующему вызову передается аргумент, являющийся результатом предыдущего вызова функции; см. примеры ниже)
 - Функцию для применения
 - Аргумент для применения */

//-----------------------моё решение-------------------
export default function apply(howMuch, callback, argument) {
    if(!howMuch){
        return argument
    }
    let javap = null;
    for (let i = 0; i < howMuch; i++) {
        javap = callback(argument);
        argument = javap;
    }
    return javap;
}

//------------решение учителя:---------------------
const apply2 = (count, fn, value) => (
    count === 0 ? value : apply2(count - 1, fn, fn(value))
);


console.log(apply(0, Math.sqrt, 4));; // 4
console.log(apply(1, Math.sqrt, 4));; // 2

// Math.sqrt(Math.sqrt(16));
console.log(apply(2, Math.sqrt, 16)); // 2
// Math.sqrt(Math.sqrt(Math.sqrt(256)));
console.log(apply(3, Math.sqrt, 256)); // 2

console.log(apply(1, v => v ** 2, 3)); // 9
console.log(apply(5, v => v + 10, 3)); // 53