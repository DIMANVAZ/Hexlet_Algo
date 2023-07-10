// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
let arr = [1,0,2,3,0,4,5,0];

var duplicateZeros = function(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop(); // для сохранения исходной длины массива
            i++;
        }
        i++;
    }
};

duplicateZeros(arr);
console.log(arr); // [1,0,0,2,3,0,0,4]


duplicateZeros(arr);
console.log(arr);