import LinkedList from "./LinkedList.js";

// Очередь - это Fifo. Эта очередь основана на связном списке. У списка есть голова и хвост.
// У каждого элемента LinkedList есть поле .next и поле .value.
// H -> G -> F -> E (начало очереди это E, т.к. занял раньше всех. Конец - H, занял позже всех.
// В Очереди на базе LL tail-самый первый элемент очереди (вставший раньше всех в очередь), head - последний добавленный.
// Добавляем перед head, забираем с tail.
// А ниже будет пример на массиве

export default class Queue{
    constructor(linkedList = new LinkedList()) {
        this.linkedList = linkedList;
    }

    push(element){ // Добавить в очередь (push)
        this.linkedList.prepend(element);
    };

    peek(){ // Вернуть элемент с начала очереди (вставший первым в очередь эл-т) без удаления (peek)
        return this.linkedList?.tail?.value || null;
    };

    pop(){ // Забрать первого из очереди (pop), то есть из хвоста
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

const queue = new Queue();

queue.push('E');
queue.push('F');
queue.push('G');
queue.push('H');
// имеем H -> G -> F -> E

console.log(queue.peek()); // E
console.log(queue.pop()); // E
console.log(queue.peek()); // F
queue.push('I'); // I встала в очередь
console.log(queue.pop()); // F
console.log(queue.pop()); // G
console.log(queue.pop()); // H
console.log(queue.pop()); // I

console.log(queue.isEmpty()); //true

//====================== пример на массиве: ==========================
const arrQueue = [];
arrQueue.push('First In');  // queue is now ['First In']
arrQueue.push('Second In'); // queue is now ['First In', 'Second In']
let i = arrQueue.shift();   // queue is now ['Second In']
console.log(i);             // displays 'First In'
console.log(arrQueue);      // displays ['Second In']