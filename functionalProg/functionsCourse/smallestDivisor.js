/*  Реализуйте тело функции smallestDivisor(), используя итеративный процесс.
Функция должна находить наименьший делитель заданного числа. Число, передаваемое в функцию, больше нуля.

Доп. условие: делитель должен быть больше единицы, за исключением случая, когда аргументом является единица
(наименьшим делителем которой является также единица).

Например, наименьший делитель числа 15 это 3.   */

export default function smallestDivisor(num){
    if(num === 1){
        return 1;
    }
    if(num % 2 === 0){
        return 2;
    }
    let tempDivisor = 3;

    function next(num){
        if(num % tempDivisor === 0){ // нашли-таки ровный делитель
            return tempDivisor;
        }
        if(tempDivisor === num){ // дошли-таки до самоё себя
            return tempDivisor;
        }
        tempDivisor++;
        return next(num); // наращиваем и пробуем дальше
    }
    return next(num,tempDivisor);
}

console.log(smallestDivisor(15)); // 3
console.log(smallestDivisor(17)); // 17
