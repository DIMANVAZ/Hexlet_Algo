import { make, append, getName, getValue, node, is, toString as htmlToString } from '@hexlet/html-tags';
import { l, isEmpty, head, tail, cons as consList, reverse, toString as listToString} from '@hexlet/pairs-data';

/*
Реализуйте и экспортируйте функцию filter() для библиотеки html-tags, используя итеративный процесс.
Реализуйте и экспортируйте функцию quotes(), которая извлекает из html тексты цитат и возвращает список цитат.
*/

export function filter(predicate, htmlList){
    let filtered = make();
    function iterator(htmlList){
        if(isEmpty(htmlList)){
            return filtered;
        }
        if(predicate(head(htmlList))){ //нода, на которой функция-предикат сработала правдиво
            filtered = append(filtered,head(htmlList));
        }
        return iterator(tail(htmlList));
    }
    return reverse(iterator(htmlList));
}

export function quotes(htmlList){
    let quotes = make();
    function iterator(htmlList){
        if(isEmpty(htmlList)){
            return quotes;
        }
        if(getName(head(htmlList)) === 'blockquote'){
            quotes = append(quotes,getValue(head(htmlList)));
        }
        return iterator(tail(htmlList));
    }
    return reverse(iterator(htmlList));
}

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

const processedHtml = filter((element) =>
    !is('h1', element), html3);

//<p>content</p>
console.log(htmlToString(processedHtml));

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const dom4 = append(dom3, node('blockquote', 'live is life'));
const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

console.log(listToString(quotes(dom5))); // ('i am sexy, and i know it', 'live is life');
