// сортировка слиянием
function mergeSort(arr){
    if (arr.length <= 1) { // Если длина меньше или равна 1, то массив отсортирован
        return arr;
    }

    // Разделяем на два массива
    const midIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, midIndex);
    const rightArr = arr.slice(midIndex, arr.length);

    // Рекурсивно сортируем два массива
    const leftSorted = mergeSort(leftArr);
    const rightSorted = mergeSort(rightArr);

    // Выполняем слияние двух отсортированных массивов
    return mergeArrays(leftSorted, rightSorted);
}

// слияние двух отсортированных массивов
function mergeArrays(leftArr, rightArr){
    const result = []; //пустой массив-приёмник
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftElement = leftArr[leftIndex]; //начальный эл-т левого массива
        const rightElement = rightArr[rightIndex]; //начальный эл-т правого массива
        if (leftElement < rightElement) {
            result.push(leftElement);
            leftIndex += 1;
        } else {
            result.push(rightElement);
            rightIndex += 1;
        }
    }
    return result
        .concat(leftArr.slice(leftIndex))
        .concat(rightArr.slice(rightIndex));
}

console.log(mergeSort([4, 5, 0, 1])); // [0, 1, 4, 5]