/*Реализуйте и экспортируйте асинхронную функцию getDirectorySize(),
которая считает размер переданной директории (не включая поддиректории).*/

import fs from "fs";
import path from 'path';
import _ from 'lodash';
const { promises: fsp } = fs;

function getDirectorySize(directory){
    return fsp.readdir(directory)
        .then(res => res.map(el => fsp.stat(path.join(directory,el))))
        .then(mapOfProms => Promise.all(mapOfProms))
        .then(some => some.filter(function(el){
            return !el.isDirectory();
        }))
        .then(onlyFiles => onlyFiles.map(el => el.size))
        .then(sizes => _.sumBy(sizes))
}
getDirectorySize('H:\\Hexlet_Algo\\dataDrivenProgramming').then(console.log);

// fsPromises.readdir - чтение содержимого директории
// path.join - конструирует пути
// fsPromises.stat - информация о файле
// _.sumBy - нахождение суммы в массиве