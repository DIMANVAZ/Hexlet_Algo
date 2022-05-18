import { l, cons as consList, head, tail, isEmpty, toString as listToString } from '@hexlet/pairs-data';

/*
Реализуйте и экспортируйте функцию has(), которая проверяет, является ли переданное значение элементом списка.
Реализуйте и экспортируйте функцию reverse(), которая переворачивает список, используя итеративный процесс.
Реализуйте и экспортируйте функцию concat(), которая соединяет два списка, используя рекурсивный процесс
(попробуйте сначала представить, как работала бы функция copy(), которая принимает на вход список и возвращает его копию).
*/

export function has(list, value){}
export function reverse(list){}
export function concat(list1, list2){}

const numbers = l(3, 4, 5, 8);
has(numbers, 8); // true
has(numbers, 0); // false

const numbers2 = l(3, 4, 5);
reverse(numbers2); // (5, 4, 3)

const numbers3 = l(3, 2, 9);
concat(numbers, numbers3); // (3, 4, 5, 8, 3, 2, 9)

