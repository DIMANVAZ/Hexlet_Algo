/*
Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
A reduced array is created by applying the following operation:
    val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed.
    The final value of val is returned.
If the length of the array is 0, it should return init.
Please solve it without using the built-in Array.reduce method.

Input:
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10

Input:
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130

Input:
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
*/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(!nums.length) {
        return init;
    }
    nums.forEach(el => {
        init = fn(init, el);
    })
    return init;
};

console.log(reduce([1,2,3,4], function(accum, curr) {
    return accum + curr;
}, 0));

console.log(reduce([1,2,3,4], function(accum, curr) {
    return accum + curr * curr;
}, 100));

console.log(reduce([], function(accum, curr) {
    return 0;
}, 25));