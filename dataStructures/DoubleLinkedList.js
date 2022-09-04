class DoubleLinkedListNode {
    constructor(value=null, previous = null, next=null) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}

export default class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    show(){ //выдать весь список в виде массива
        this.all = [];
        if(this.head){
            let nextEl = this.head;
            while(nextEl){
                this.all.push(nextEl.value);
                nextEl = nextEl.next;
            }
        }
        return this.all;
    }

    delete(value){ //удаляет все элементы, равные value. Возвращает удалённое

        let nextEl = this.head;   // стартовая позиция (проверяемый элемент nextEl) - голова. Пойдём вправо
        let removableElem = null; // поначалу присвоим удаляемому null - а вдруг его не будет

        while(nextEl){
            if(this.head && this.head.value === value){ // проверяем голову. Если искомое значение есть в голове, то...
                removableElem = this.head; // сохраняем "голову" в удаляемое
                this.head = this.head.next; // перезаписываем голову
                nextEl = this.head; // непременный шаг вперёд (помним про слабость - условие выхода из цикла)

            } else if (this.tail && this.tail.value === value){ // проверяем хвост. Если искомое значение есть в хвосте, то...
                removableElem = this.tail; // сохраняем "хвост" в удаляемое
                this.tail = this.tail.previous; // перезаписываем хвост
                nextEl = nextEl.next; // т.к. в голове не было, то всё равно шаг вперёд

            } else { // если ничего не было ни в голове, ни в хвосте, исследуем проверяемый элемент nextEl

                if(nextEl.value === value){ //1. Если проверяемый совпал
                    removableElem = nextEl;

                    let rightMate = nextEl?.next; // это мы сохранили "потомка" nextEl-a
                    let leftMate = nextEl?.previous; // это мы сохранили "предка" nextEl-a

                    leftMate ? leftMate.next = rightMate: false; // если "предок" существует - пишем ему в потомки правого товарища nextEl-a
                    rightMate ? rightMate.previous = leftMate: false; // если "потомок" существует - пишем ему в предки левого товарища nextEl-a

                    nextEl = nextEl.next; // непременный шаг вперёд (помним про слабость - условие выхода из цикла)
                }

                else { //2. Если проверяемый НЕ совпал
                    nextEl = nextEl.next; // всё равно шаг вперёд
                }
            }
        }
        return removableElem;
    }

    find(value){ //– находит первый элемент, равный value
        // перебрать весь список, найти первый
        let found = null;
        if(!this.head){
            return found;
        }

        if(this.head && this.head.value === value){
            found = this.head;
        }
        if(this.tail && this.tail.value === value){
            found = this.tail;
        }

        let nextEl = this.head.next;

        while(nextEl){
            if(nextEl.value === value){
                found = nextEl;
                break;
            }

            else {
                nextEl = nextEl.next;
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
for (let i = 1; i <= 10; i++) {
    doll.append(i);
}
/*console.log('tail = ', doll.tail.value);
doll.delete(10);
console.log(doll.delete(11));;
console.log('tail = ', doll.tail.value);
console.log('head = ', doll.head.value);
doll.delete(1);
console.log('head = ', doll.head.value);
console.log(doll.show());
doll.delete(7);*/
console.log(doll.show());
console.log(doll.find(5));
console.log(doll.find(10));
console.log(doll.find(11));

