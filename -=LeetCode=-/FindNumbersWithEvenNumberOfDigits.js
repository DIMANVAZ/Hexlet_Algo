const nums = [1,11,33,4444];

var findNumbers = function(nums) {
    return nums.filter(num => num.toString().length % 2 === 0).length;
};

console.log(findNumbers(nums))