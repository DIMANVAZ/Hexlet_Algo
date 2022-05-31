import { strict as assert } from 'assert';
import getFunction from './functions.js';
/* Напишите тесты для функции take(items, n), которая возвращает первые n элементов из массива.
По умолчанию n равен 1. Если n отрицательное число, то возвращается пустой массив. */

const take = getFunction();

// BEGIN (write your solution here)
assert.deepEqual(take([], 2), [], 'Не равно!');
assert.deepEqual(take([1, 2, 3]), [1], 'Не равно!');
assert.deepEqual(take([1, 2, 3], 2), [1,2], 'Не равно!');
assert.deepEqual(take([4, 3], 9), [4,3], 'Не равно!');
assert.deepEqual(take([4, 3], -1), [], 'Не равно!');
assert.deepEqual(take([4, 3], 0), [], 'Не равно!');

// END

take([], 2); // []
take([1, 2, 3]); // [1]
take([1, 2, 3], 2); // [1, 2]
take([4, 3], 9); // [4, 3]
take([4, 3], -1); // []

/*Подсказки
_.take
Asserts
Выберите правильный способ сравнения: по ссылке или по значению*/
