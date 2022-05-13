/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию и
возвращает список вложенных узлов (директорий и файлов) в указанную директорию на один уровень,
а также место, которое они занимают. Размер файла задается в метаданных.
Размер директории складывается из сумм всех размеров файлов, находящихся внутри во всех поддиректориях.
Сами директории размера не имеют.
*/

import {getChildren, getMeta, getName, isFile, mkdir, mkfile} from '@hexlet/immutable-fs-trees';
import sum from'lodash/sum.js'

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

export default function du(tree){
    function sizer(tree) {
        if(isFile(tree)){
            return getMeta(tree).size;
        }
        const children = getChildren(tree);
        const weigthedChildren = children.map(child => sizer(child));
        return sum(weigthedChildren);
    }

    let answer = [];
    getChildren(tree).forEach(child => {
        answer.push([getName(child),sizer(child)])
    })
    return answer;
}

console.log(du(tree));
// [
//   ['etc', 10280],
//   ['hosts', 3500],
//   ['resolve', 1000],
// ]
console.log(du(getChildren(tree)[0]));


