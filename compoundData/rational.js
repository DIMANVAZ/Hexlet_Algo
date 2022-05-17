/*
Рациональное число — число, представляемое обыкновенной дробью m/n, числитель m — целое число,
а знаменатель n — натуральное число. Пример рационального числа: 2/3.
    Формулы:
Сложение: a/b + c/d = (a * d + b * c) / (b * d)
Вычитание: a/b - c/d = (a * d - b * c) / (b * d)
Умножение: a/b * c/d = (a * c) / (b * d)
Деление: a/b / c/d = (a * d) / (b * c)
Равенство: a/b = c/d, если a * d = c * b

Реализуйте абстракцию для работы с рациональными числами, используя пары:

Конструктор make(numer, denom).
Селекторы numer (числитель) и denom (знаменатель).
Функцию toString, возвращающую строковое представление рационального числа.
    Например для дроби 3/4 созданной так make(3, 4), строковым представлением будет 3 / 4.

Функцию-предикат isEqual, проверяющую равенство двух рациональных чисел. Например isEqual(make(1, 2), make(2, 4)).
Функцию add, выполняющую сложение дробей.
Функцию sub, выполняющую вычитание дробей.
Функцию mul, выполняющую умножение дробей.
Функцию div, выполняющую деление дробей.

Экспортируйте созданные функции.

Обратите внимание, что результатом любой арифметической операции над рациональным числом будет рациональное число.
*/

import {cons,car,cdr} from "@hexlet/pairs";

export function make(numer, denom){
    return cons(numer,denom);
}
export function numer(rational){
    return car(rational);
}
export function denom(rational){
    return cdr(rational);
}
export function toString(rational){
    return `${numer(rational)} / ${denom(rational)}`;
}
export function isEqual(rat1,rat2){
    const a = numer(rat1);
    const b = denom(rat1);
    const c = numer(rat2);
    const d = denom(rat2);
    return a * d === c * b;
}
export function add(rat1,rat2){
    const a = numer(rat1);
    const b = denom(rat1);
    const c = numer(rat2);
    const d = denom(rat2);
    return make(a * d + b * c,b * d);
}
export function sub(rat1,rat2){
    const a = numer(rat1);
    const b = denom(rat1);
    const c = numer(rat2);
    const d = denom(rat2);
    return make(a * d - b * c,b * d);
}
export function mul(rat1,rat2){
    const a = numer(rat1);
    const b = denom(rat1);
    const c = numer(rat2);
    const d = denom(rat2);
    return make(a * c,b * d);
}
export function div(rat1,rat2){
    const a = numer(rat1);
    const b = denom(rat1);
    const c = numer(rat2);
    const d = denom(rat2);
    return make(a * d,b * c);
}


const rat1 = make(2, 3);
const rat12 = make(4, 6);
const rat2 = make(7, 2);

console.log(toString(rat12)); // '4 / 6'
console.log(isEqual(rat1, rat12)); // true

add(rat1, rat2); // 25/6
sub(rat2, rat1); // 17/6
mul(rat1, rat2); // 14/6
div(rat1, rat2); // 4/21