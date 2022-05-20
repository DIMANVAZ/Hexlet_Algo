import { make, append, getName, getValue, node, is, toString as htmlToString } from '@hexlet/html-tags';
import { l, isEmpty, head, tail, cons as consList, reverse, toString as listToString} from '@hexlet/pairs-data';

/*
Реализуйте и экспортируйте функцию reduce() для библиотеки html-tags/
Реализуйте и экспортируйте функцию emptyTagsCount(), которая считает количество пустых тегов. Тип тега задается первым параметром функции.
*/
export function reduce(handler, accum, htmlList){
    // функция должна
    const fnRes = handler(element,accum)

}

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

reduce((element, acc) => {
    return is('h1', element) ? acc + 1 : acc;
}, 0, html3); // 2

export function emptyTagsCount(){

}

const html4 = make();
const html5 = append(html4, node('h1', 'scheme'));
const html6 = append(html5, node('p', 'is a lisp'));
const html7 = append(html6, node('blockquote', ''));
const html8 = append(html7, node('blockquote', ''));
const html9 = append(html8, node('blockquote', 'quote'));

emptyTagsCount('blockquote', html9); // 2