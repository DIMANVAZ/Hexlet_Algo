class DoubleLinkedListNode {
    constructor(value=null, previous = null, next=null) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}

class DoubleLinkedList {
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
        // прикол в движении в обе стороны - в next и в previous
        if(!this.head.next && this.head.value !== value){
            // просто не меняем нулл
        }

        return removableElem;
    }

    find(value){ //– находит первый элемент, равный value
        // перебрать весь список, найти первый
        let found = null;

        if(this.head.value === value){
            found = this.head;
        }
        if(this.tail.value === value){
            found = this.tail;
        }

        let nextEl = this.head.next;
        let prevEl = this.tail.previous;
        while(nextEl.next || prevEl.previous){
            if(nextEl.value === value){
                found = nextEl;
                break;
            }
            else if(prevEl.value === value){
                found = prevEl;
                break;
            }
            else {
                nextEl = nextEl.next;
                prevEl = prevEl.previous;
            }
        }

        return found;
    }

    append(value){ //– добавляет элемент в конец списка
        // если существует tail - значит, есть хотя бы 1 элемент
        if(this.tail){
            this.tail.next = new DoubleLinkedListNode(value,this.tail, null);
            this.tail = this.tail.next;
        }
        // если не существует tail - значит, ни 1 элемента нет (т.к. в списке из 1 элемента этот элемент сразу и голова, и хвост
        else{
            this.head = new DoubleLinkedListNode(value);
            this.tail = this.head;
        }
        return this;
    }

    prepend(value){ //  – добавляет элемент в начало списка
        // если существует head - значит, есть хотя бы 1 элемент
        if(this.head){
            this.head.previous = new DoubleLinkedListNode(value,null, this.head);
            this.head = this.head.previous;
        }
        // если не существует head- значит, ни 1 элемента нет (т.к. в списке из 1 элемента этот элемент сразу и голова, и хвост
        else{
            this.head = new DoubleLinkedListNode(value);
            this.tail = this.head;
        }
        return this;
    }
}

const doll = new DoubleLinkedList();
doll.append(7).append(8).append(12).prepend(6).append(15);

console.log(doll.find(7));
