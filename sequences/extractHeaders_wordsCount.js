import { node, append, make, reduce, getName, getValue, toString as htmlToString } from '@hexlet/html-tags';

/*  Реализуйте и экспортируйте функцию extractHeaders(), которая извлекает тексты всех заголовков h2 из переданного HTML
и возвращает HTML, в котором каждый из этих текстов обернут в p.

Например, такой HTML в строковом представлении <h2>header1</h2><h2>header2</h2><p>content</p> превратится
в такой <p>header1</p><p>header2</p>.

Реализуйте и экспортируйте функцию wordsCount(), которая считает вхождения слова в определенный тег.
Для подсчета слов в тексте одного тега воспользуйтесь вспомогательной функцией wc(),
которая уже импортирована в модуль html-tags.           */

export function extractHeaders(htmlList){
    function roller(elem, acc){
        return getName(elem)==='h2' ? append(acc, node('p',getValue(elem))) : acc;
    }
    return reduce(roller, make(), htmlList);
}

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));
// <h2>header1</h2><h2>header2</h2><p>content</p>

console.log(htmlToString(extractHeaders(html3)));
// <p>header1</p><p>header2</p>

export function wordsCount(tag, word, htmlList){
    function summator(elem, acc){
        return getName(elem)===tag? acc + wc(word,getValue(elem)) : acc;
    }
    return reduce(summator, 0, htmlList);
}

const html4 = append(make(), node('h2', 'header1 lisp'));
const html5 = append(html4, node('p', 'content'));
const html6 = append(html5, node('h2', 'lisp header2 lisp'));
const html7 = append(html6, node('p', 'content lisp'));

console.log(wordsCount('h2', 'lisp', html7)); // 3

function wc(word, text){
    const re = new RegExp(word, 'g');
    return (text.match(re) || []).length;
}