import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from '@hexlet/pairs-data';

/* Реализуйте абстракцию для создания html. Она включает в себя следующие функции:

make() — конструктор. Уже реализован. Не принимает параметров, и создает HTML-список.

node() — создает новый тег. Содержит два элемента, имя тега и его содержимое. Дополнительно реализуйте селекторы тега: getName() и getValue().

append() — добавляет элемент (тег), созданный с помощью node(), в HTML-список. Возвращает новый HTML-список.
Новый элемент должен добавляться в начало ("голову") списка.

toString() — возвращает текстовое представление HTML на основании HTML-списка. */

export const make = () => l();
export function node(tagName, tagValue){
    return cons(tagName, tagValue);
}
export function getName(node){
    return car(node);
}
export function getValue(node){
    return cdr(node);
}
export function append(list, node){
    return consList(node, list);
}
export function toString(htmlList){
    function iter(list,acc){
        if(isEmpty(list)){
            return acc;
        }
        acc = `<${getName(head(list))}>${getValue(head(list))}</${getName(head(list))}>`+acc;
        return iter(tail(list),acc)
    }
    return iter(htmlList,'');
}

const tag = node('div', 'what is love?');
console.log(getName(tag)); // div
console.log(getValue(tag)); // what is love?

// Создаем новый html-список
const dom1 = make();

// Создаем тег и сразу добавляем его в html
const dom2 = append(dom1, node('h1', 'hello, world'));
// Еще раз
const dom3 = append(dom2, node('h2', 'header2'));

// Создаем новый тег
const tag2 = node('h3', 'header3');
// Добавляем созданный тег в html-список
const dom = append(dom3, tag2);

// Преобразуем html-список в строчку
console.log(toString(dom));
// <h1>hello, world</h1><h2>header2</h2><h3>header3</h3>

// Пример без создания промежуточных переменных
toString(append(make(), node('p', 'this is Sparta!')));
// <p>this is Sparta!</p>