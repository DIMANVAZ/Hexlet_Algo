export function reverse(str){return str.split('').reverse().join('')};

export function fill(coll, value, startI = 0, endI = coll.length){
    if(startI <0 || endI <0){
        return coll;
    }
    if(startI >= coll.length ){
        return coll;
    }
    endI = endI > coll.length ? coll.length : endI;
    for (let i = startI; i < endI; i++) {
        coll[i] = value;
    }
    return coll;
}

/* Напишите тесты для функции fill(coll, value, start, end), которая заполняет элементы массива переданным значением,
начиная со старта и заканчивая (но не включая) конечной позицией. Функция меняет исходный массив!

Функция принимает следующие аргументы:
    coll – массив, элементы которого будут заполнены
    value – значение, которым будут заполнены элементы массива
    start – стартовая позиция, по умолчанию равна нулю
    end – конечная позиция, по умолчанию равна длине массива
    Функция работает с неотрицательными значениями start и end.*/


const array =  [1, 2, 3, 4];

fill(array, '*', 1, 3);
console.log(array); // => [1, '*', '*', 4]

fill(array, '*');
console.log(array); // => ['*', '*', '*', '*']

fill(array, '*', 4);
console.log(array); // => [1, 2, 3, 4]

fill(array, '*', 0, 10);
console.log(array); // => ['*', '*', '*', '*']