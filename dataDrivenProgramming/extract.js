import {l, map, toString} from '@hexlet/pairs-data';

/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список тегов
(только <a>, <link> и <img>) и возвращает список ссылок, извлеченных из этих тегов. */

//  make() — принимает на вход два параметра: название тега и объект, в котором содержатся атрибуты и их значения.
//  getName() — принимает на вход тег, полученный вызовом make(), и возвращает его имя.
//  getAttribute() — принимает на вход имя атрибута и тег, полученный вызовом make(). Возвращает значение атрибута.
const make = (name, attributes = {}) => ({ name, attributes });
const getName = (tag) => tag.name;
const getAttribute = (attrName, tag) => tag.attributes[attrName];

const mapping = {
    img: (t) => getAttribute('src', t),
    a: (t) => getAttribute('href', t),
    link: (t) => getAttribute('href', t),
};

export default function extract(tags){
    return map((tag) => mapping[getName(tag)](tag), tags);
}

const tags = l(
    make('a', { href: '/about' }),
    make('img', { src: '/avatar.jpeg' }),
    make('link', { href: '/favicon.ico' }),
);

extract(tags); // ('/about', '/avatar.jpeg', '/favicon.ico')


