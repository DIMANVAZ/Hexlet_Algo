/*  Функции bind(), apply() и call() работают с контекстом и аргументами.
В этом упражнении вы научитесь заменять одну функцию другой для получения функциональности, аналогичной bind().

Реализуйте и экспортируйте по умолчанию функцию, которая ведет себя аналогично встроенной bind(obj, fn).
Аргументы функции:

obj – объект выступающий в роли контекста
fn() – функция привязываемая к контексту            */

const fn = function fn(number) {
    return number + this.number;
};

// вспоминаем курс функциональное программирование - что принимает функцкия? что возвращает? как вернуть функцию?
export function bind(context, callback){
    return function(...args){       // возвращаем функцию, которая принимает сколько угодно аргументов
        return callback.call(context, ...args);
    }
}

const obj = { number: 5 };
const fnWithContext = bind(obj, fn);

console.log(fnWithContext(3)); // 8

const obj2 = { number: 7 };
const fn2 = function fn(number1, number2) {
    return number1 + this.number - number2;
};

const fn2WithContext = bind(obj2, fn2);

console.log(fn2WithContext(3, 1));  //  9
console.log(fn2WithContext(0, -3)); //  10
console.log(fn2WithContext.call({ number: 12 }, 5, 8)); //  4
