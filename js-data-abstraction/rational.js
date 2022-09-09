/*Реализуйте абстракцию для работы с рациональными числами, включающую в себя следующие функции:

Конструктор makeRational() - принимает на вход числитель и знаменатель, возвращает дробь в виде объекта.
Селектор getNumer() - возвращает числитель
Селектор getDenom() - возвращает знаменатель
Сложение add() - складывает переданные дроби
Вычитание sub() - находит разность между двумя дробями
Не забудьте реализовать нормализацию дробей удобным для вас способом.

Функция getGcd() находит наибольший общий делитель двух чисел (уже импортирована в модуль)
Функция ratToString() возвращает строковое представление числа (используется для отладки)
В решении исходите из того, что в знаменателе всегда положительное число. Учитывайте знак только в числителе
*/

import getGcd from './utils.js';

function makeRational(numer, denom){
    const gcd = getGcd(numer,denom);
    return {
        numer:numer/gcd,
        denom:denom/gcd
    };
}

function getNumer(rat){
    return rat.numer;
}

function getDenom(rat){
    return rat.denom;
}

function add(rat1, rat2){
    const numer1 = getNumer(rat1);
    const denom1 = getDenom(rat1);
    const numer2 = getNumer(rat2);
    const denom2 = getDenom(rat2);
    const commonDenum = denom1*denom2;
    const sumOfNumers = numer1*denom2 + numer2*denom1;
    return makeRational(sumOfNumers,commonDenum);
}

function sub(rat1, rat2){
    const numer1 = getNumer(rat1);
    const denom1 = getDenom(rat1);
    const numer2 = getNumer(rat2);
    const denom2 = getDenom(rat2);
    const commonDenum = denom1*denom2;
    const diffOfNumers = numer1*denom2 - numer2*denom1;
    return makeRational(diffOfNumers,commonDenum);
}

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

const rat1 = makeRational(3, 9);
getNumer(rat1); // 1
getDenom(rat1); // 3

const rat2 = makeRational(10, 3);

const rat3 = add(rat1, rat2);
console.log(ratToString(rat3)); // '11/3'

const rat4 = sub(rat1, rat2);
console.log(ratToString(rat4)); // '-3/1'
