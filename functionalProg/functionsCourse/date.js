/*Реализуйте функцию, которая конвертирует даты в массив человеко-читаемых строк на английском языке.
Каждая из дат представлена массивом [2001, 10, 18], в котором первый элемент — это год, второй — месяц, и третий — число.
Функция на вход должна принимать любое количество параметров.
Если в функцию ничего не было передано, она должна вернуть пустой массив. */

export default function convert(...datesArray){
    return datesArray.map(date => new Date(date[0],date[1], date[2]).toDateString());
}

convert();
// []

let x = convert([1993, 3, 24]);
console.log(x);
// ['Sat Apr 24 1993']

let y = convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]);
console.log(y);
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']

console.log(Date.now())
console.log(new Date())


