/* Реализуйте и экспортируйте по умолчанию функцию, которая умеет частично
применять один (второй) аргумент у переданной функции c двумя аргументами: */

//--------мои варианты----------------------
function partialApply(fn,second){
    return (first) => fn(first,second);
}

function partialApply2(fn,arg2){
    return function (arg1){
        return fn(arg1,arg2);
    }
}
//---------вариант учителя-------------------
export default (f, second) => (first) => f(first, second);

const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);
console.log(f1(1)); // 1
console.log(f1(10)); // 100

const f2 = partialApply2((a, b) => a * b, 5);
console.log(f2(2)); // 10
console.log(f2(5)); // 25

