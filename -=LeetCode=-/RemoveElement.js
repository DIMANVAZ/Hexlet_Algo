/*
Дан целочисленный массив nums и целое значение val, удалите все вхождения val в nums на месте.
Порядок расположения элементов может быть изменен.
Затем верните количество элементов в nums, которые не равны val.
Учтите, что количество элементов в nums, которые не равны val, равно k,
чтобы их приняли, вам нужно выполнить следующие действия:
Измените массив nums таким образом, чтобы первые k элементов nums содержали элементы, которые не равны val.
Остальные элементы nums не важны, так же как и размер nums. Верните k.

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
*/

var removeElement = function(nums, val) {
    let k = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        const endEl = nums.pop();
        if(endEl !== val) {
            nums.unshift(endEl);
            k++;
        }
    }
    for (let i = 0; i < len-k; i++) {
        nums.push("_");
    }
    return k;
};

const arr1 = [3,2,2,3];
removeElement(arr1, 3);
console.log(arr1);

const arr2 = [0,1,2,2,3,0,4,2];
removeElement(arr2, 2);
console.log(arr2);

