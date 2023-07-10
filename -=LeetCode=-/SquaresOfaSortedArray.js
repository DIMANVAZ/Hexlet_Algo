// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
//
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]


var sortedSquares = function(nums) {
    return nums
        .map(el => Math.abs(el))
        .sort((a,b) => a -b)
        .map(el => el*el);
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));