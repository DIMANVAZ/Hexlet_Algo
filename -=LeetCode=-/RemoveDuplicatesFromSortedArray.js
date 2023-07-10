/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
*/


var removeDuplicates = function(nums) {
    const len = nums.length;
    const set = new Set(nums);
    const k = set.size;
    nums.splice(0, k, ...set.keys());
    nums.fill("_", k);
};
const nums1 = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(nums1);
console.log(nums1);

const nums2 = [1,1,2];
removeDuplicates(nums2);
console.log(nums2);