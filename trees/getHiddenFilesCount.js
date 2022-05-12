/*
Реализуйте и экспортируйте по умолчанию функцию, которая считает количество скрытых файлов в директории и всех поддиректориях.
Скрытым файлом в Linux системах считается файл, название которого начинается с точки.
*/

import {
    mkfile, mkdir, getChildren, isFile, getName, getMeta
} from '@hexlet/immutable-fs-trees';
import sum from 'lodash/sum.js';

const tree = mkdir('/', [
    mkdir('etc', [
        mkdir('apache'),
        mkdir('nginx', [
            mkfile('.nginx.conf', { size: 800 }),
        ]),
        mkdir('.consul', [
            mkfile('.config.json', { size: 1200 }),
            mkfile('data', { size: 8200 }),
            mkfile('raft', { size: 80 }),
        ]),
    ]),
    mkfile('.hosts', { size: 3500 }),
    mkfile('resolve', { size: 1000 }),
]);

export default function getHiddenFilesCount(tree){
    if(isFile(tree) && getName(tree)[0]==='.'){
        return 1;
    }
    const children = getChildren(tree);

    let countedChildren = children?.map(child => getHiddenFilesCount(child));
    //console.log(countedChildren);
    return sum(countedChildren);
}

console.log(getHiddenFilesCount(tree)); // 3