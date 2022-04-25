class LinkedListNode {
    constructor(value=null,next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    delete(value){ //удаляет все элементы, равные value
        // плюс во время удаления переназначать текущему элементу next как тот, на что ссылается удаляемый

        if(!this.head){ // список пуст - нечего искать
            return null;
        }
        while(this.head && this.head.value === value){ //если искомые идут сразу с начала подряд
            this.head = this.head.next;
        }

        let thisEl = this.head; // т.к. голова явно уже не подходит, то стартуем с неё

        while(thisEl){
            if(thisEl.next.value === value){ // если у следующего звена нужное value, то возможны 2 варианта?
                if(thisEl.next === this.tail){ // - либо это след.звено - хвост, и тогда просто назначим новый хвост
                    this.tail = thisEl;
                } else thisEl = thisEl.next.next; // ... либо перескакиваем дальше
            }
            else thisEl = thisEl.next; // если с value у следующего не угадали, то просто шажок вперёд
        }
        return this;
    }

    find(value){ //– находит первый элемент, равный value
        // перебрать весь список, найти первый
        if(!this.head){
            return null;
        }
        if(this.head.value === value){
            return this.head;
        }
        if(this.tail.value === value){
            return this.tail;
        }
        let nextEl = this.head.next;

        while(nextEl?.next){
            if(nextEl.value !== value){
                nextEl = nextEl.next;
            } else return nextEl;
        }
        return null;
    }

    append(value){ //– добавляет элемент в конец списка
        // если существует tail - значит, есть хотя бы 1 элемент
        if(this.tail){
            this.tail.next = new LinkedListNode(value);
            this.tail = this.tail.next;
        }
        // если не существует tail - значит, ни 1 элемента нет (т.к. в списке из 1 элемента этот элемент сразу и голова, и хвост
        else{
            this.tail = new LinkedListNode(value);
            this.head = this.tail;
        }
        return this;
    }

    prepend(value){ //  – добавляет элемент в начало списка
        // если существует head - значит, есть хотя бы 1 элемент
        if(this.head){
            this.head = new LinkedListNode(value, this.head);
        }
        // если не существует head- значит, ни 1 элемента нет (т.к. в списке из 1 элемента этот элемент сразу и голова, и хвост
        else{
            this.head = new LinkedListNode(value);
            this.tail = this.head;
        }
        return this;
    }
}

const linkedList = new LinkedList();

console.log(linkedList.head); // null
console.log(linkedList.tail); // null

linkedList.append(1).append(2);

console.log(linkedList.tail.value); // 2
console.log(linkedList.head.value); // 1

linkedList.prepend(10);
console.log(linkedList.head.value); // 10

console.log(linkedList)

linkedList.delete(2);
console.log(linkedList.tail.value); // 1

/*
let newLL = new LinkedList();
newLL.prepend(3).prepend(1).append(9);
console.log('head:',newLL.head);
console.log('tail:',newLL.tail);
console.log(newLL.find(6));
console.log(newLL.find(9));
console.log(newLL.find(5));
console.log(newLL);
console.log(newLL.delete(3));
console.log(newLL.prepend(4).prepend(4).prepend(4));;
console.log(newLL.delete(4));*/
