import LinkedList from "./LinkedList.js";

// Стек - это Lifo. Этот стек основан на связном списке. У списка есть голова и хвост.
// У каждого элемента LinkedList есть поле .next и поле .value.
// A -> B -> C -> D (верх стопки это D, добавлен позже всех. Низ - A, добавлен раньше всех)
// В стеке на базе LL head-самый нижний элемент стопки, tail - верхний (добавленный позже).
// Добавляем после tail, забираем с tail.
// А ниже будет пример на массиве

export default class Stack{
    constructor(linkedList = new LinkedList()) {
        this.linkedList = linkedList;
    }

    push(element){ // Добавить в стек (push)
        this.linkedList.append(element);
    };

    peek(){ // Вернуть элемент с вершины стека без удаления (peek)
        return this.linkedList?.tail?.value || null;
    };

    pop(){ // Взять из стека (pop) - то есть берём последнего, хвост tail
        if(this.isEmpty()) return null; // если пустой - ответ нулл

        let tailValue = this.linkedList.tail.value; // если нет - сохраним значение хвоста

        let actEl = this.linkedList.head;
        while(actEl){
            if(actEl === this.linkedList.tail){ // если сразу попали на хвост - обнуляем всё
                this.linkedList.head = null;
                this.linkedList.tail = null;
            }
            else if(actEl.next === this.linkedList.tail){ // если хвост - следующий за ним, то переназначаем
                this.linkedList.tail = actEl;
                actEl.next = null;
            }
            actEl = actEl.next
        }
        return tailValue;
    };

    isEmpty(){ // Проверить на пустоту (isEmpty)
        return !this.linkedList.head;
    };

}

const stack = new Stack();

stack.push('A');
stack.push('B');
stack.push('C');
stack.push('D');
// имеем A -> B -> C -> D

console.log(stack.peek()); // D
console.log(stack.pop()); // D
console.log(stack.pop()); // C
console.log(stack.isEmpty()); //false

//====================== пример на массиве: ==========================
const arrStack = [];
arrStack.push('First In');  // stack is now ['First In']
arrStack.push('Second In'); // stack is now ['First In', 'Second In']
let i = arrStack.pop();     // stack is now ['First In']
console.log(i);             // displays 'Second In'
console.log(arrStack);      // displays ['First In']