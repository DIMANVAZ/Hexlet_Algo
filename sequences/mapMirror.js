import { make, append, getName, getValue, node, is, toString as htmlToString } from '@hexlet/html-tags';
import { l, isEmpty, head, tail, cons as consList, reverse, toString as listToString} from '@hexlet/pairs-data';

/* Реализуйте и экспортируйте функцию map() для библиотеки html-tags.
Реализация должна быть построена с использованием итеративного процесса (без циклов, на основе рекурсии).
Эта функция подобна той, что описывалась в теории для списков, только текущая реализация работает с HTML-списком.
Параметры и их порядок у функций аналогичный.
Первый — функция-трансформер, второй — коллекция (в нашем случае список HTML-тегов).

Реализуйте и экспортируйте функцию mirror(), которая переворачивает содержимое тегов,
так чтобы читать его нужно было справа налево, а не слева направо.

make() — конструктор. Уже реализован. Не принимает параметров, и создает HTML-список.
node() — создает новый тег. Содержит два элемента, имя тега и его содержимое.
append() — добавляет элемент (тег), созданный с помощью node(), в HTML-список. Возвращает новый HTML-список.
Новый элемент должен добавляться в начало ("голову") списка.
*/

export function map2(handler, htmlList){ //принимаем функцию-обработчик и список
    if(isEmpty(htmlList)){
        return make(); // пустой лист - на нём и выедем из рекурсии. К нему и прилепим append-ом первую updNode;
    }
    const updNode = handler(head(htmlList)); //обновлённая нода после обработки функцией
    return append(map(handler,tail(htmlList)),updNode); //прилепляем к создаваемому списку обновлённую ноду
}

export function map(handler, htmlList){
    if(isEmpty(htmlList)){
        return make();
    }
    const updNode = handler(head(htmlList));
    return append(map(handler,tail(htmlList)),updNode);
}


export function mirror(htmlList){
    function reverser(oldNode){
        return node(getName(oldNode), getValue(oldNode).split("").reverse().join(""));
    }
    return map(reverser,htmlList);
}

is('h3', node('h3', 'hexlet')); // true
is('h3', node('h6', 'hexlet')); // false


const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

// Отображение в результате которого в html-списке заменяются теги h1 на теги h2
const processedDom = map((element) => {
    if (is('h1', element)) {
        return node('h2', getValue(element));
    }
    return element;
}, dom3);


console.log(htmlToString(mirror(dom3)));;
// <h1>emehcs</h1>
// <p>psil a si</p>