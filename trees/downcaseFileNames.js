import {
    mkfile, mkdir, getChildren, isFile, getName, getMeta
} from '@hexlet/immutable-fs-trees';
import cloneDeep from 'lodash/cloneDeep.js';

export default function downcaseFileNames(tree){
    const meta = cloneDeep(getMeta(tree));
    let name = getName(tree);
    if(isFile(tree)){
        return mkfile(name.toLowerCase(),meta);
    }

    // важный момент с .map
    const children = getChildren(tree);
    const updChildren = children.map(child => downcaseFileNames(child));

    return mkdir(name, updChildren, meta);
}

const tree = mkdir('/', [
    mkdir('eTc', [
        mkdir('NgiNx'),
        mkdir('CONSUL', [
            mkfile('config.json'),
        ]),
    ]),
    mkfile('hOsts'),
]);

//console.log(downcaseFileNames(tree));