
import assert from 'power-assert';
import getFunction from './functions.js';
/* Напишите тесты для функции indexOf(items, value, [fromIndex=0]),
которая возвращает индекс первого вхождения переданного элемента в массив,
начиная поиск с индекса fromIndex, значение которого по умолчанию равно нулю: */
const indexOf = getFunction();

// BEGIN (write your solution here)
assert(indexOf([1, 2, 1, 2], 2) === 1);
assert(indexOf([0, 0, 0, 0], 0) === 0);
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
assert(indexOf([2, 'one', 'cat', false], 8) === -1);
assert(indexOf([2, 'one', 'cat', false], 2, 4) === -1); // индекс превышает массив
assert(indexOf([], 2, 4) === -1); // массив пуст, 2 параметра
assert(indexOf([],1) === -1); // массив пуст, 1 параметр
assert(indexOf([]) === -1); // массив пуст, 0 параметров
assert(indexOf([2, 1, 1, 1], 2, -2) === -1); //элемент присутствует, индекс отрицательный
assert(indexOf([1, 2, 1, 2], 2, -6) === 1); //элемент есть, индекс больше длины массива
assert(indexOf([2, 1, 1, 2], 2, -1) === 3); //элемент присутствует, индекс отрицательный
assert(indexOf([2, 1, 1, 2],[2]) === -1); //элемента нет

// END


