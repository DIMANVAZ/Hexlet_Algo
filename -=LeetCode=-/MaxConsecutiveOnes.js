const nums1 = [1,1,0,1,1,1];
const nums2 = [1,0,1,0,0,1,1,1,0,1,1,0];

function findMaxConsecutiveOnes(numsArray) {
    let lastMaxLength = 0;
/*  0. Установить временный счётчик равным 0.
    1. Взять следующий элемент.
    2. Если это "0", сравнить временный счётчик с макимумом.
       Если временный счётчик больше максимума, записать значение счётчика в максимум.
       Сбросить счётчик.
       Выполнить шаг 1.

    3. Если это "1", нарастить счётчик на 1;
    4. Выполнить шаг 1.*/
    let tempCounter = 0;
    for (let i = 0; i < numsArray.length; i++) {
        if(numsArray[i] === 1){
            tempCounter += 1;
            lastMaxLength = tempCounter > lastMaxLength ? tempCounter: lastMaxLength;
        } else {
            //lastMaxLength = tempCounter > lastMaxLength ? tempCounter: lastMaxLength;
            tempCounter = 0;
        }
    }
    return lastMaxLength;
};

console.log(findMaxConsecutiveOnes(nums1));
console.log(findMaxConsecutiveOnes(nums2));