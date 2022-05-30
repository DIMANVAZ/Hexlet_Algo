// рекурсивная функция в общем виде:
function recursive(val){
    //базовый случай - вернуть значение
    if(!val){
        return 0;
    } else {
    //рекурсивный шаг - вернуть вызов функции [опционально-с примочками]
    //он должен приближать значение, передаваемое в функцию, к БАЗОВОМУ СЛУЧАЮ
    //иначе переполнится стек!
        return val + recursive(--val);
    }
}

console.log(recursive(3)); // 6


// суммирует все элементы массива
function recursive_array_sum(array = [1,3,5]){
    //базовый случай - return value;
    if(!array.length){
        return 0;

    } else {
        //рекурсивный шаг - return itself function [+ что-то ещё];
        return array.pop() + recursive_array_sum(array); // 1+0 = 1; 3+1 = 4; 5+4 = 9;
    }
}

console.log(recursive_array_sum()); // 9

// факториал числа
function recursive_fucktorial(value= 4){
    //базовый случай - return value;
    if(value === 1){
        return 1;

    } else {
        //рекурсивный шаг - return itself function [+ что-то ещё];
        return value * recursive_fucktorial(--value);
    }
}

console.log(recursive_fucktorial()); // 24

//--------факториал из курса-------
const factorial = (n) => {
    if (n === (0||1)) {
        return 1;
    }
    return n * factorial(n - 1);
};


console.log(factorial(3)); // 6
console.log(factorial(5)); // 120

//------возведение в степень : --------------
function pow(num,n){
    if(n === 1){
        return num;
    }
    return num * pow(num, n-1);
}
console.log(pow(2,4)); //16