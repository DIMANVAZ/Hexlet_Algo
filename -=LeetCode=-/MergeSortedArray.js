/*
Вам даны два целочисленных массива nums1 и nums2, отсортированные в неубывающем порядке,
и два целых числа m и n, представляющие количество элементов в nums1 и nums2 соответственно.
Объедините nums1 и nums2 в один массив, отсортированный в неубывающем порядке.
Окончательный отсортированный массив не должен возвращаться функцией, а должен храниться внутри массива nums1.
Чтобы приспособиться к этому, nums1 имеет длину m + n, где первые m элементов обозначают элементы,
которые должны быть объединены, а последние n элементов устанавливаются равными 0 и должны игнорироваться.
nums2 имеет длину n.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
    The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
    Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
    The result of the merge is [1].
    Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
    The result of the merge is [1].
    Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
*/



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a,b) => a-b);
};
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
merge(nums1, 3, nums2, 3);
console.log(nums1);