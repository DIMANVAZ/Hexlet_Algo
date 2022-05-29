import { make, append, getName, getValue, node, is, toString as htmlToString } from '@hexlet/html-tags';
import { l, isEmpty, head, tail, cons as consList, reverse, toString as listToString} from '@hexlet/pairs-data';

/*
Реализуйте и экспортируйте функцию reduce() для библиотеки html-tags/
Реализуйте и экспортируйте функцию emptyTagsCount(), которая считает количество пустых тегов. Тип тега задается первым параметром функции.
*/
export function reduce(handler, accum, htmlList){
    // функция должна принять элемент и аккумулятор и выдать новый аккумулятор
    if(isEmpty(htmlList)){
        return accum;
    }
    accum = handler(head(htmlList),accum);
    htmlList = tail(htmlList);
    return reduce(handler, accum, htmlList);
}

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

const dom4 = append(dom3, node('h1', 'haskell'));
const dom5 = append(dom4, node('p', 'is a functional language'));

const dom6 = append(dom5, node('h1', 'prolog'));

const dom7 = append(dom6, node('h2', ''));
const dom8 = append(dom7, node('span', ''));
const dom = append(dom8, node('p', 'is about logic'));

console.log(reduce((element, acc) => (is('h1', element) ? acc + 1 : acc), 0, dom)); //3

console.log(reduce((element, acc) => {
    return is('h1', element) ? acc + 1 : acc;
}, 0, html3)); // 2

console.log(reduce((element, acc) => {
    const content = getValue(element);
    return is('h1', element) ? `${acc} ${content}` : acc;
}, 'Languages:', dom)); //'Languages: prolog haskell scheme'

console.log(reduce((_element, acc) => acc + 1, 0, dom)); //8


export function emptyTagsCount(tagName, htmlList){
    let count = 0;
    function summer(htmlList){
        if(isEmpty(htmlList)){
            return count;
        }
        let next = head(htmlList);
        if(getName(next) === tagName && !getValue(next)){
            count += 1;
        }
        htmlList = tail(htmlList);
        return summer(htmlList);
    }

    return summer(htmlList);
}

const html4 = make();
const html5 = append(html4, node('h1', 'scheme'));
const html6 = append(html5, node('p', 'is a lisp'));
const html7 = append(html6, node('blockquote', ''));
const html8 = append(html7, node('blockquote', ''));
const html9 = append(html8, node('blockquote', 'quote'));

console.log(emptyTagsCount('blockquote', html9)); // 2

