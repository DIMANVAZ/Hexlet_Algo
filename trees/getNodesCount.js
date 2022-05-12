//Рассмотрим агрегацию с использованием рекурсивного процесса на примере подсчёта общего количества узлов в дереве.
// То есть мы хотим узнать сколько всего файлов и директорий содержится в нашем файловом дереве.

import {
    mkfile, mkdir, getChildren, isFile, getName, getMeta
} from '@hexlet/immutable-fs-trees';
import sum from 'lodash/sum.js';

const tree = mkdir('/', [
    mkdir('etc', [
        mkfile('bashrc'),
        mkfile('consul.cfg'),
    ]),
    mkfile('hexletrc'),
    mkdir('bin', [
        mkfile('ls'),
        mkfile('cat'),
    ]),
]);

// В реализации используем рекурсивный процесс,
// чтобы добраться до самого дна дерева.
function getNodesCount(tree){
    if (isFile(tree)) {
        // Возвращаем 1 для учёта текущего файла
        return 1;
    }

    // Если узел — директория, получаем его детей
    const children = getChildren(tree);
    // Самая сложная часть
    // Считаем количество потомков для каждого из детей,
    // вызывая рекурсивно нашу функцию getNodesCount
    const descendantCounts = children.map(getNodesCount);
    // Возвращаем 1 (текущая директория) + общее количество потомков
    return 1 + sum(descendantCounts);
}

console.log(getNodesCount(tree)); // 8
