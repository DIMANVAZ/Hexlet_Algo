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

    delete(value){ //удаляет все элементы, равные value. Возвращает удалённое
        // плюс во время удаления переназначать текущему элементу next как тот, на что ссылается удаляемый

        if(!this.head){ // список пуст - нечего искать
            return null;
        }
        let removableElem = null;

        while(this.head && this.head.value === value){ //если искомые идут сразу с начала подряд
            removableElem = this.head;
            this.head = this.head.next;
        }

        let thisEl = this.head; // т.к. голова явно уже не подходит, то стартуем с неё

        while(thisEl){ // пока существует текущий элемент
            if(!thisEl.next){ // след элемент - не существует. Искать нечего
                return removableElem; // вместо НУЛЛА - см строку 23
            } else {
                // 1) следующий элемент - существует
                if(thisEl.next.value === value){ // 1а)-его значение подходит
                    removableElem = thisEl.next;

                    if(thisEl.next === this.tail){ // если след элемент - хвост, то
                        this.tail = thisEl; //... то назначаем хвост данным элементом
                    } else {
                        thisEl.next = thisEl.next.next;
                    }
                } else { // 1б)-следующий элемент - существует, но его значение не подходит
                    thisEl = thisEl.next;
                }
            }
        }
        return removableElem;
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

console.log(linkedList.delete(5)); // null ?

linkedList.append(1)
    .append(1)
    .append(1)
    .append(3)
    .append(4);

const deletedNode = linkedList.delete(1);
console.log(deletedNode.value); // 1

// console.log(linkedList.delete(1)); //null
// console.log(linkedList.head.value); //3 ?
//
// linkedList.delete(4);
// linkedList.delete(4);
//
// console.log(linkedList.tail.next); //null



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
