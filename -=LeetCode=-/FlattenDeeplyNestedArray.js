/*
Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced
with the actual elements in that sub-array.
This flattening operation should only be done if the current depth of nesting is less than n.
The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.

Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 1
Output
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]

Input
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 2
Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

Input
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 0
Output
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
*/

/**
 * @param {any[]} arr
 * @param n
 * @return {any[]}
 */
var flat = function (arr, n) {
    let nextArr = arr;
    while(n > 0){
        let innerArr = [];
        nextArr.forEach(el => {
            Array.isArray(el)? innerArr.push(...el) : innerArr.push(el);
        })
        n--;
        nextArr = innerArr;
    }
    return nextArr;
};
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(arr1, 1))

const arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(arr2, 2))

const arr3 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(arr3, 0))