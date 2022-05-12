import {
    mkfile, mkdir, getChildren, isFile, getName, getMeta
} from '@hexlet/immutable-fs-trees';
import cloneDeep from 'lodash/cloneDeep.js';
import makeTree from "./makeTree.js";

// функция по замене владельца - переписал по памяти
function changeOwner(tree, owner) {
    const name = getName(tree); // сохранили имя
    const newMeta = cloneDeep(getMeta(tree));
    newMeta.owner = owner;

    if(isFile(tree)){
        return mkfile(name,newMeta);
    }

    const children = getChildren(tree);
    children.map(child => changeOwner(child));// ошибка!
    // должно быть const newChildren = children.map((child) => changeOwner(child, owner));
    // и в mkdir передавать newChildren! тупица

    return mkdir(name, children, newMeta);
}

console.log(changeOwner(makeTree(),'Ayrat'));