import {
    l,  cons as consList, isList, isEmpty, head, tail, concat, toString as listToString,
} from '@hexlet/pairs-data';
import {
    is, hasChildren, children, filter, reduce, append, make, node, toString as htmlToString,
} from '@hexlet/html-tags';


/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя тега и HTML список, а возвращает
список всех нод, соответствующих имени. Ноды возвращаются в том виде, в котором они представлены в дереве.
Порядок, в котором ноды возвращаются — не важен.
*/

export function select(tag, htmlList){ //должна вернуть акккум. принимает тег и лист

    function checkEl(elem, acc){ //должна вернуть аккум. принимает элемент и аккум
        //1. соответствуешь? да - полезай в акк.
        if(is(tag, elem)){
            acc = append(acc, elem);
        }
        //2. Дети есть? Да - они тоже список, и их тоже прогоним функцией
        if(hasChildren(elem)){
            acc = concat(acc,select(tag, children(elem))); //вернёт аккум
        }
        return acc; // возвращает аккум
    }
    return reduce(checkEl, make(), htmlList); //должна вернуть аккум
}

const dom1 = make(); // Список нод, то есть это лес, а не дерево
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('ul', children1));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children2));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children3 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children3));
const dom8 = append(dom7, node('div', l(node('p', 'text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', 'text'))))));

const dom10 = append(dom9, node('h1', 'prolog'));
const dom = append(dom10, node('p', 'is about logic'));

console.log(htmlToString(select('li', dom)));
// [('li', 'item 1'), ('li', 'item 2'), ('li', 'item 1'), ('li', 'item 2'), ('li', 'item')]

console.log(htmlToString(select('p', dom)));
// [('p', 'is a lisp'), ('p', 'text'), ('p', 'text'), ('p', 'is about logic'), ('p', 'is a functional language')]

