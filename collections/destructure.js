//================ДЕСТРУКТУРИЗАЦИЯ=========================

//================1. Для массивов============
function calcValues(a, b) {
    return [
        a + b,
        a - b,
        undefined, // в примере пропустим
        a * b,
        a / b
    ];
};

const resArr = calcValues(6,2);
console.log(resArr); // [ 8, 4, undefined, 12, 3 ]

const [sum, sub, ,mult, div] = resArr;
console.log(sum ,sub, mult, div); // 8 4 12 3

const [sum1, sub1,  , mult1, div1]  = calcValues(6,2); //3-ю переменную пропустили. Результат тот же
console.log(sum1 ,sub1, mult1, div1); // 8 4 12 3

//...назначили 3-й переменной деф. значение
const [sum2, sub2, empty = 'default', mult2, div2] = resArr;
console.log(sum2 ,sub2, empty, mult2, div2); // 8 4 'default' 12 3

//...пример с 'rest' - выдаст прочие элементы массива:
const [sum3, ...rest] = resArr;
console.log(rest); // [ 4, undefined, 12, 3 ]

const arr = [1,2,3,4,5];
function iter(array,accum){
    if(!array.length){
        return accum;
    }
    const [first,...rest] = array;
    accum += first;
    return iter(rest,accum);
}
console.log(iter(arr,0)); //15



//================2. Для Объектов=============
const car = {
    brand: 'Honda',
    model: 'CRZ',
    weight: 1200,
    isRaceCar: true,
    produced: {
        country: 'Japan',
        plant: 'Kanto',
        year: 2000
    }
};
                     const {brand} = car; //одно свойство первого уровня
const {produced: {country, plant}} = car; //вложенные свойства
                      const {year} = car.produced; //иной способ присвоения вложенного свойства
        const {weight: mass} = car; //переназначение в другую переменную

//---c рестами
const {c,d,...rest1} = {c:1, d:2, e:3, f:4};
console.log('rest1 = ', rest1); // { e: 3, f: 4 }
const {e,f, ...rest2} = {c:1, d:2, e:3, f:4};
console.log('rest2 = ', rest2); //  { c: 1, d: 2 }

// методы объекта - в функции
const {keys, values} = Object;
const obj = {a:1};
console.log(keys(obj), values(obj)); //['a'] [1]


//------для функций---------------------------------------

    //классическая запись: в функцию передаётся объект
function printer1(Object){
    return `${Object.brand} + ${Object.model}`
}

    //деструкто-запись: в функцию передаётся объект
function printer2({brand, model}){
    return `${brand} + ${model}`
}

console.log(printer2(car)); // Honda + CRZ

    //===^ результат идентичный ^===========

function oneMorePrinter({brand, model, color = 'default RED'}) {
                    //значение по умолчанию ^^^ если нету у объекта
    return `${brand} + ${model} + ${color}`
}

//====а это не деструкто...==================================
class NewClass {
    constructor({cvet, nazvanie, dlina}) {
        this.cvet = cvet;
        this.nazvanie = nazvanie;
        this.dlina = dlina
    }
}

const alla = new NewClass ({cvet:'red', nazvanie:'lineika', dlina:20});
console.log(alla.dlina); //20

//----поменять местами 2 переменные -----------------------------------------------------------

let a = 5;
let b = 9;

[a,b] = [b,a];
console.log(a,b); // 9 5


const obj_ = {name:'Ayrat', age:32};
function print({name, age}){
    console.log(name,age);
}
print(obj_); // Ayrat 32

function luckyPrint({price = 50, mass = 'default'}){
    console.log(price, mass);
}

luckyPrint({price:33});
luckyPrint({});

//---------------------------
const book = {
    title: "Idiot",
    pages: 333,
    price:40
}
for(const [key, value] of Object.entries(book)){
    console.log(key, value);
}

/* title Idiot
pages 333
price 40 */

const animals = [
    {type: 'dog', age: 5},
    {type: 'dog', age: 7},
    {type: 'cat', age: 3},
    {type: 'cat', age: 9},
]

const young = animals.filter(({age}) => age <6);
console.log(young);// [ { type: 'dog', age: 5 }, { type: 'cat', age: 3 } ]
