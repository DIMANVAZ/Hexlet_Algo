/* Напишите и экспортируйте функции car() и cdr(), основываясь на реализации функции cons():

const cons = (x, y) => (f) => f(x, y);
При таком определении как выше, пара будет представлять из себя функцию f => f(x, y).

Теперь догадаться до решения не так уж и сложно. По сути car() и cdr() должны вызвать внутри себя pair()
(ведь это функция, не забыли?), и передать туда функцию, которая в зависимости от ситуации вернет либо первый,
либо второй аргумент.           */

const cons = (x, y) => (f) => f(x, y);

const pair = cons(5, 3);
//const pair = (f) => f(5, 3);

//---- моё решение-----------------
export function car(pair){
    return pair(function (x,y){
        return x;
    })
}

export function cdr(pair){
    return pair(function (x,y){
        return y;
    })
}

//---- решение Учителя-------------
export const car2 = (z) => z((x) => x); // second arg unused here
export const cdr2 = (z) => z((x, y) => y);

console.log(car(pair));
console.log(cdr(pair));

console.log(car2(pair));
console.log(cdr2(pair));

