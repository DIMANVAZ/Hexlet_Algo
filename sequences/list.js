import { l, cons as consList, head, tail, isEmpty, toString as listToString } from '@hexlet/pairs-data';

/*
Реализуйте и экспортируйте функцию has(), которая проверяет, является ли переданное значение элементом списка.
Реализуйте и экспортируйте функцию reverse(), которая переворачивает список, используя итеративный процесс.
Реализуйте и экспортируйте функцию concat(), которая соединяет два списка, используя рекурсивный процесс
(попробуйте сначала представить, как работала бы функция copy(), которая принимает на вход список и возвращает его копию).

у списка из 1 элемента нет хвоста! null Но голова есть!
*/

export function has(list, value){
    if(isEmpty(list)){
        return false;
    }
    if(head(list) === value){
        return true;
    }
    return has(tail(list),value)
}

export function reverse(list){
    if(isEmpty(list)){
        return list;
    }
    let reversed = l();
    function next(tempList){
        reversed = consList(head(tempList),reversed);
        if(!tail(tempList)){
            return reversed;
        }
        return next(tail(tempList))
    }
    return next(list);
}

export function concat(list1, list2){

}

const numbers = l(1, 2, 3, 4);
const numbers3 = l(5, 6, 7);
console.log(listToString(concat(numbers, numbers3))); // (1, 2, 3, 4, 5, 6, 7)

let emp = l(3,4,5,6);
console.log(listToString(tail(emp)))
console.log(listToString(reverse(emp)));

const numbers2 = l(3, 4, 5);
console.log(listToString(reverse(numbers2))); // (5, 4, 3)



// console.log(has(numbers, 8)); // true
// console.log(has(numbers, 0)); // false


