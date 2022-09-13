/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход односвязный список и переворачивает его.*/

class Node {
    constructor(value, node = null) {
        this.next = node;
        this.value = value;
    }

    getNext() {
        return this.next;
    }

    getValue() {
        return this.value;
    }
}

// BEGIN (write your solution here)
export default function reverse(list){
    let reversedList = null; // пока пуст
    let current = list; // текущий список

    // покуда существует "текущий" список
    while (current) {
        // развёрнутый список = новый узел (текущее значение, развёрнутый список)
        reversedList = new Node(current.getValue(), reversedList);
        // переназначаем следующий узел(список) в "текущий"
        current = current.getNext();
    }
    return reversedList;
}

const numbers = new Node(1, new Node(2, new Node(3))); // (1, 2, 3)
console.log(numbers);
const reversedNumbers = reverse(numbers); // (3, 2, 1)
console.log(reversedNumbers);
// END