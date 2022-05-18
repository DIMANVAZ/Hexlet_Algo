/* Пары неотрицательных целых чисел можно представить числами и арифметическими операциями.
Можно считать, что пара чисел a и b – это 2^a * 3^b.

Функции car() и cdr() при этом будут просто вычислять значения a и b (кратности двойки и тройки, соответственно),
раскладывая аргумент на множители.

Например, имея пару 5, 8 в виде числа 209952 (2^5 * 3^8), можно получить первый элемент пары,
разложив число на множители и вычислив факторизацию для числа 2,
а второй элемент пары – разложив число на множители и вычислив факторизацию для числа 3. */

export function cons(a,b){
    return Math.pow(2,a)*Math.pow(3,b);
}

export function car(pair){
    let count = 0;
    function iterator(nextPair){
        if(nextPair % 2){
            return count;
        }
        count+=1;
        return iterator (nextPair/2);
    }
    return iterator(pair);
}

export function cdr(pair){
    let count = 0;
    function iterator(nextPair){
        if(nextPair % 3){
            return count;
        }
        count+=1;
        return iterator (nextPair/3);
    }
    return iterator(pair);
}

//-------------решение учителя------------------------
const factor = (base, value) => {
    if (value % base !== 0) {
        return 0;
    }
    return 1 + factor(base, value / base);
};

export const cons2 = (a, b) => (2 ** a) * (3 ** b);
export const car2 = (pair) => factor(2, pair);
export const cdr2 = (pair) => factor(3, pair);


const pair = cons(5, 8);    // 2^5 * 3^8 = 209952
console.log(car(pair)); // 5
console.log(cdr(pair)); // 8

const pair2 = cons2(5, 8);    // 2^5 * 3^8 = 209952
console.log(car2(pair)); // 5
console.log(cdr2(pair)); // 8
