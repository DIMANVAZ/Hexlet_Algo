import {
    mkfile, mkdir, getChildren, isFile, getName, getMeta
} from '@hexlet/immutable-fs-trees';
import cloneDeep from 'lodash';
import makeTree from "./makeTree.js";

// функция по замене владельца
const changeOwner = (tree, owner) => {
    const name = getName(tree); // тащим имя
    const newMeta = cloneDeep(getMeta(tree)); //копируем метаданные переданного дерева в новые Мета
    newMeta.owner = owner; //присваиваем нового владельца этим новым Мета

    if (isFile(tree)) { // Если дерево - файл, то возвращаем обновлённый файл + покидаем функцию
        return mkfile(name, newMeta);
    }

    const children = getChildren(tree); // раз мы не вышли - значит, не файл, а директория. Получаем наследников
    // Ключевая строчка
    // Вызываем рекурсивное обновление каждого ребёнка
    const newChildren = children.map((child) => changeOwner(child, owner));

    // Возвращаем обновлённую директорию
    return mkdir(name, newChildren, newMeta);;
};

const nT = changeOwner(makeTree(), 'Ayrat');
console.log(nT.children[0].meta.owner);