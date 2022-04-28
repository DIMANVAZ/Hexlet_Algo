import LinkedList from "./LinkedList.js";

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

    pop(){ // Взять из стека (pop)
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

stack.push(1);

console.log(stack.peek()); // 1

console.log(stack.pop()); // 1

console.log(stack.pop()); // null

console.log(stack.isEmpty()); // true

