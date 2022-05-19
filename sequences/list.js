import { l, cons as consList, head, tail, isEmpty, toString as listToString } from '@hexlet/pairs-data';

/* Реализуйте и экспортируйте функцию has(), которая проверяет, является ли переданное значение элементом списка.
Реализуйте и экспортируйте функцию reverse(), которая переворачивает список, используя итеративный процесс.
Реализуйте и экспортируйте функцию concat(), которая соединяет два списка, используя рекурсивный процесс
(попробуйте сначала представить, как работала бы функция copy(), которая принимает на вход список и возвращает его копию).

У списка из 1 элемента нет хвоста! null Но голова есть!
consList ставит переданный элемент в начало переданного списка, как ни крути! */

export function copy(listToCopy){
    return consList(head(listToCopy),tail(listToCopy));
}

//-----------решение Учителя--------
const numbers = l(1, 2, 3, 4);
const numbers2 = l(5, 6, 7);

export const concat = (list1, list2) => {
    if (isEmpty(list1)) {
        return list2;
    }
    return consList(head(list1), concat(tail(list1), list2));
};

export const reverse = (list) => {
    const iter = (items, acc) => (
        isEmpty(items) ? acc : iter(tail(items), consList(head(items), acc))
    );

    return iter(list, l());
};

//-------------мои решения----------------------
export function has(list, value){
    if(isEmpty(list)){
        return false;
    }
    if(head(list) === value){
        return true;
    }
    return has(tail(list),value)
}
export function reverseMy(list){
    if(isEmpty(list)){
        return list;
    }
    let reversed = l();
    function next(tempList){
        reversed = consList(head(tempList),reversed);
        if(!tail(tempList)){
            return reversed;
        }
        return next(tail(tempList))
    }
    return next(list);
}
export function concatMy(list1, list2){
    if(isEmpty(list1)){
        return list2;
    }
    if(isEmpty(list2)){
        return list1;
    }
    let rev = reverse(list1); // разворачиваем первый список
    let updatedList = consList(head(rev),list2); // начнём сразу с прилепления ко второму списку хвоста первого (головы перевёрнутого)
    function gluer(listToTake, updatedList){ // принимает след элемент и удлинённый список
        if(!tail(listToTake)){
            return updatedList;
        }
        updatedList = consList(head(tail(listToTake)),updatedList); // перезаписываем обновлённый список-
        return gluer(tail(listToTake),updatedList)
    }
    return gluer(rev,updatedList);
}

const list1 = l(1,2);
console.log(listToString(consList(0,list1)));
console.log(listToString(list1));
copy(list1);

console.log(listToString(concat(numbers, numbers2)));//'(3, 4, 5, 8, 3, 2, 9)
//console.log(listToString(concat(numbers, l())));//(3, 4, 5, 8)
//console.log(listToString(concat(l(), numbers2)));//(3, 2, 9)
//console.log(listToString(concat(l(1, 7, 8, 13, 5, 17, 22, 99, 53, 19), numbers2)));//(1, 7, 8, 13, 5, 17, 22, 99, 53, 19, 3, 2, 9)

// let emp = l(3,4,5,6);
// console.log(listToString(tail(emp)))
// console.log(listToString(reverse(emp)));

// const numbers2 = l(3, 4, 5);
// console.log(listToString(reverse(numbers2))); // (5, 4, 3)

// console.log(has(numbers, 8)); // true
// console.log(has(numbers, 0)); // false




