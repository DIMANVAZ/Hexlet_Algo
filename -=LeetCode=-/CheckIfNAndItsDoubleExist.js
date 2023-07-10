/*
Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]

Example 1:
Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

Example 2:
Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const zeroone = arr.indexOf(0);
    const zerotwo = arr.lastIndexOf(0);
    if(zeroone > -1 && zeroone !== zerotwo){
        console.log('Куча нулей !!!');
        return true;
    }
    let javap = false;
    const used = new Set(arr);
    for(let i=0; i<arr.length; i++) {
        const el = arr[i];
        if (el === 0){
            continue;
        }
        const double = el * 2;
        const half = el / 2;
        if (used.has(double) || used.has(half)){
            javap = true;
            break;
        }
    }
    return javap;
};



const startTime = Date.now();
// console.log(checkIfExist([10,2,5,3]));
console.log(checkIfExist([3,1,7,11]));
console.log(checkIfExist([0,0]));
console.log(checkIfExist([-2,0,10,-19,4,6,-8]));
// const diff = Date.now() - startTime;
// console.log(diff / 1000);
