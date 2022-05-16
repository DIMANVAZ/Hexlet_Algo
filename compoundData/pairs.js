import {cons, car, cdr, toString, isPair} from '@hexlet/pairs';


//Реализуйте функцию reversePair(), которая принимает на вход пару и возвращает другую, в которой значения переставлены местами:
const pair = cons('one', 'two');
function reversePair(anyPair){
    return cons(cdr(anyPair),car(anyPair));
}
console.log(toString(reversePair(pair))); // ('two', 'one')

//Реализуйте функцию sumOfPairs(), которая принимает на вход две пары и возвращает новую пару,
// в элементах которой находятся суммы элементов из исходных пар:

const pair1 = cons(4, 10);
const pair2 = cons(100, 0);
function sumOfPairs(pair1,pair2){
    const sum1 = car(pair1) + car(pair2);
    const sum2 = cdr(pair1) + cdr(pair2);
    return cons(sum1, sum2);
}
console.log(toString(sumOfPairs(pair1, pair2))); // (104, 10)

/*
Однажды вы сидели дома, когда курьер Василий принес вам коробку. С коробкой шла записка следующего содержания:

Коробка состоит из двух отсеков, в одном из которых письмо, а в другом лежит еще одна коробка,
в которой также два отсека и точно также один отсек с письмом, а в другом - коробка.
Коробки могут быть вложены друг в друга сколько угодно раз.
Вам нужно добраться до коробки, внутри которой нет вложенной коробки ни в одном из двух отсеков, и отдать ее курьеру.

Подчеркну, что во всех коробках, кроме той последней, в одном отсеке письмо (любые данные, которые не являются парой),
а в другом - всегда коробка, но никогда не две коробки одновременно.
Сами отсеки при этом могут меняться, то есть в одной коробке отсеком с письмом может быть первый, а в другой - последний.

Реализуйте рекурсивную функцию findPrimitiveBox(), которая принимает на вход "коробку" (пару),
находит внутри нее пару без вложенных пар (как описано выше) и возвращает наружу.
*/

const pair3 = cons(
    null,
    cons('one', 'two'),
);
toString(findPrimitiveBox(pair3)); // ('one', 'two')

const pair4 = cons(
    cons(null, cons(1, 5)),
    null,
);

function findPrimitiveBox(pair){
    const aIsPair = isPair(car(pair));
    const dIsPair = isPair(cdr(pair));
    if(!aIsPair && !dIsPair){
        return pair;
    }
    if(aIsPair){
        return findPrimitiveBox(car(pair));
    }
    return findPrimitiveBox(cdr(pair));
}

console.log(toString(findPrimitiveBox(pair4))); // (1, 5)