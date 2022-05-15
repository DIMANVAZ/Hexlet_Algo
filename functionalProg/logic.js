/*Удивительно, но факт — условные конструкции можно реализовать самостоятельно с использованием одних лишь каррированных функций.
В этой практике мы реализуем упрощённую версию, имитирующую работу условной конструкции if.
Экспортируйте три функции True, False, If, внутри которых есть только функции.
То есть нельзя пользоваться встроенным в язык условным оператором if, а также true и false.
Сами функции должны быть каррированы.
*/

// То есть, в итоге должно вернуться то или иное значение, в зависимости от того, какая функция передана на вход If.
// Если функции If была передана True, то выражение ниже вернёт значение аргумента первого вызова (one)
// Если функции If была передана False, то выражение ниже вернёт значение аргумента второго вызова (two)

//--------------моё решение-----------------------------
function If(booleanFunction){
    return function (arg1){
        return function (arg2){
            return booleanFunction(arg1)(arg2);
        }
    }
    //...а можно лишь return booleanFunction;
}
function True(arg1){
    return function (arg2){ //можно пропустить arg2
        return arg1;
    };
}

function False(arg1){ //можно пропустить arg1
    return function (arg2){
        return arg2;
    };
}

//--------------решение Учителя-----------------------------
const True_ = (x) => () => x;
const False_ = () => (y) => y;
const If_ = (f) => f;

//--------------решение Учителя развёрнутей------------------
const _True_ = (x) => {
    return () => {
        return x;
    };
};

const _False_ = () => {
    return (y) => {
        return y;
    };
};

const _If_ = (f) => {
    return f;
};


const ConditionFunction = If(True);
ConditionFunction('one')('two'); // one
const ConditionFunction2 = If(False);
ConditionFunction2('one')('two'); // two

console.log(If_(True_)('one')('two'));  // one
console.log(If_(False_)('one')('two')); // two

console.log(If(True)('fo')('bar'));//'fo'
console.log(If(False)('foo')('ba'));//'ba');
console.log(True()());//undefined
console.log(False()());//undefined

_If_(_True_(_False_()))


