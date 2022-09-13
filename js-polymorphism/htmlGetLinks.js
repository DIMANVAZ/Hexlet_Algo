/*  Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список тегов,
находит среди них теги a, link и img, а затем извлекает ссылки и возвращает список ссылок.
Теги подаются на вход в виде массива, где каждый элемент это тег. Тег имеет следующую структуру:

name — имя тега.
href или src — атрибуты.
    Атрибуты зависят от тега:
        тег img имеет атрибут src,
        тег a — href,
        link — href.            */

const tags = [
    { name: 'img', src: 'hexlet.io/assets/logo.png' },
    { name: 'div' },
    { name: 'link', href: 'hexlet.io/assets/style.css' },
    { name: 'h1' },
];

export default function getLinks(tagsArray){
    const dispatch = {
        img:'src',
        link:'href',
        a:'href'
    }

    return tagsArray
        .filter(tag => Object.hasOwn(dispatch,tag.name))
        .map(tag => tag[dispatch[tag.name]]);
}

const links = getLinks(tags);
// [
//   'hexlet.io/assets/logo.png',
//   'hexlet.io/assets/style.css'
// ];

console.log(links);