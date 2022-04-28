import DoubleLinkedList from "../DoubleLinkedList.js";

const doll = new DoubleLinkedList();
for (let i = 1; i <= 10; i++) {
    doll.append(i);
}

it('1,10',()=>{
    expect (doll.head.value).toEqual(1);
    expect (doll.tail.value).toEqual(10);
})

it('delete 1',()=>{
    expect (doll.delete(1).value).toEqual(1);
    expect (doll.head.value).toEqual(2);
})

it('delete 10',()=>{
    expect (doll.delete(10).value).toEqual(10);
    expect (doll.tail.value).toEqual(9);
})