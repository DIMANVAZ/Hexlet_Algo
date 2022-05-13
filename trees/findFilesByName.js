import {
    mkfile, mkdir, getChildren, isFile, getName, getMeta, isDirectory
} from '@hexlet/immutable-fs-trees';

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
    let accumulator = '';
    function recursiveDeepDiver(tree){
        //берём ноду и смотрим, файл это или папка
        // если файл - сравниваем имя + сохраняем весь путь (т.е. все имена) в массив final
        // если папка - ныряем, то есть для всех детей проделываем заново
        if(isFile(tree)){
            console.log('file')
            if(check(tree,substring)){
                final.push(getName(tree));
            }
            return;
        }
        const children = getChildren(tree);
        children.forEach(child => recursiveDeepDiver(child))
    }

    recursiveDeepDiver(tree);
    return final;
}

console.log(findFilesByName(tree, 'co'));
// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']


const findEmptyDirPaths = (tree) => {
    // Внутренняя функция, которая может передавать аккумулятор
    // В качестве аккумулятора выступает depth, переменная, содержащая текущую глубину
    const iter = (node, depth) => {
        const name = getName(node);
        const children = getChildren(node);

        // Если директория пустая, то добавляем ее в список
        if (children.length === 0) {
            return name;
        }

        // Если это второй уровень вложенности, и директория не пустая
        // то не имеет смысла смотреть дальше
        if (depth === 2) {
            // Почему возвращается именно пустой массив?
            // Потому что снаружи выполняется flat
            // Он раскрывает пустые массивы
            return [];
        }

        // Оставляем только директории
        return children.filter(isDirectory)
            // Не забываем увеличивать глубину
            .flatMap((child) => iter(child, depth + 1));

    };

    // Начинаем с глубины 0
    return iter(tree, 0);
};