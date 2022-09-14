function anagramator(word1: string, word2: string){
    if (word1.length !== word2.length){
        return false;
    }

    for (let i = 0; i < word1.length; i++) {
        const index2 = word2.indexOf(word1[i]);

        if(index2 > -1){
            word2 = word2.replace(word2[index2],'*');
        } else return false;
    }
    return true;
}

function filterAnagrams (word: string, array: string[]){
    return array.filter(el => anagramator(word,el));
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

type Bike = {
    brand:string,
    year:number,
    used:boolean
}

const oldHonda:Bike = {
    brand:'honda',
    year:1998,
    used:true
}

function buy(transport:Bike){
    return `${transport.brand} was bought`;
}

console.log(buy(oldHonda));


type Course = {
    name:string,
    lessons:string[];
}
function isComplete(course:Course){
    return course.lessons.length > 3;
}

const course1 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
};
console.log(isComplete(course1)); // false

//-------------------
function getParams(string:string){
    const arr = string.split('&');
    let res:any = {};
    // arr.reduce((acc,val) => {
    //     const pair = val.split('=');
    //     const temp = Object.fromEntries([pair]);
    //     res = {...res,...temp}
    //     return res;
    // },res)
    arr.forEach(rawPair => {
        const pair = rawPair.split('=');
        const [key,value] = pair;
        res[key] = value;
    })
    return res;
}

console.log(getParams('per=10&page=5'));
// { per: 10, page: 5 }
console.log(getParams('name=hexlet&count=3&order=asc'));
// { name: 'hexlet', count: 3, order: 'asc' }

// Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат,
// который будет использоваться для проверки каждого числа, на соответствие требованиям:
function filter(array:number[], predicate: (n:number) => boolean):number[]{
    const res:number[] = [];
    array.forEach(el => {
        if(predicate(el)){
            res.push(el);
        }
    })
    return res;
}
const numbers = [1, -5, 2, 3, 4, 133];
console.log(filter(numbers, (n) => n > 3)); // [4, 133]
console.log(filter(numbers, (n) => n % 2 == 0)); // [4, 133]

/*Реализуйте функцию map(), которая принимает на вход массив чисел и колбек,
который будет использоваться для преобразования каждого числа из массива, в какое-то другое число.
Функция возвращает массив с новыми числами.
    Параметры функции:

        Массив чисел
        Анонимная функция принимающая на вход число и возвращющая число.
        У этой функции есть необязательный параметр - индекс элемента в массиве.    */


function map(array:number[], handler:(n:number, index:number)=>number):number[]{
    const mapped: number[] = [];
    array.forEach(elem => mapped.push(handler(elem, 0)));
    return mapped;
}

console.log(map([3, 9], (n) => n - 3));
// [0, 6]

console.log(map([8, 9], (n) => n + 8));
// [16, 17]

console.log(map([8, 9], (n, index) => index + n));
// [8, 10]

type Func = (el:number, index:number) => void;
function forEach(array:number[], handler:Func){
    for (let i = 0; i <array.length; i++) {
        handler(array[i], i);
    }
}

forEach([1, 2, 3], (n) => console.log(n));
// 1
// 2
// 3

const result = [];
forEach([1, 2, 3], (n) => result.push(n));
// [1, 2, 3]

forEach([8, 9], (n, index=0) => console.log(index + n));
// 8
// 10

function max(a:number,...numbers: number[]) {
    return Math.max(a,...numbers);
}

console.log(max(1, 3, 8)); //.toBe(8);
console.log(max(10)); //.toBe(10);
console.log(max(4, 1)); //.toBe(4);