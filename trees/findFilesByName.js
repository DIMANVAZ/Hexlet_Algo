import {
    mkfile, mkdir, getChildren, isFile, getName, getMeta, isDirectory
} from '@hexlet/immutable-fs-trees';
import * as path from "path";

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и подстроку,
а возвращает список файлов, имена которых содержат эту подстроку.
Функция должна вернуть полные пути до файлов.
*/

const tree = mkdir('/', [
    mkdir('etc', [
        mkdir('apache'),
        mkdir('nginx', [
            mkfile('nginx.conf', { size: 800 }),
        ]),
        mkdir('consul', [
            mkfile('config.json', { size: 1200 }),
            mkfile('data', { size: 8200 }),
            mkfile('raft', { size: 80 }),
        ]),
    ]),
    mkfile('hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
]);

export default function findFilesByName(tree, substring) {
    // сохранять имя папки, в которую проваливаемся - переменная строка и +=
    // если имя файла содержит фрагмент - склеиваем всё
    // аккумулятор = склейка строки
    function check(node, fragment){
        return node.name.indexOf(fragment) > -1;
    }
    let final = [];

    function recursiveDeepDiver(tree,accumulator=''){
        //берём ноду и смотрим, файл это или папка
        // если файл - сравниваем имя + сохраняем весь путь (т.е. все имена) в массив final
        // если папка - ныряем, то есть для всех детей проделываем заново
        accumulator += `/${getName(tree)}`;

        if(isFile(tree)){
            if(check(tree,substring)){
                final.push(path.normalize(accumulator));
            }
            return;
        }
        const children = getChildren(tree);
        children.forEach(child => recursiveDeepDiver(child,accumulator))
    }
    recursiveDeepDiver(tree);
    if(final.length){
        return final;
    }
    return 'No files matching a fragment'
}
console.log(findFilesByName(tree, 'so'));
console.log(findFilesByName(tree, 'ffo'));


