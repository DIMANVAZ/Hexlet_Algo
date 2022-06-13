import fs from "fs";

const { promises: fsp } = fs;

const filePaths = ['H:\\Hexlet_Algo\\haha.txt', 'H:\\Hexlet_Algo\\file.tx', 'H:\\Hexlet_Algo\\haha.txt', 'H:\\Hexlet_Algo\\file.txt'];

// Эта функция принимает на вход необязательное значение,
// которое появится в promise.then((<тут>) => ...)
// Начальное значение в данном случае – массив,
// в котором накапливаются данные из файлов
const initPromise = Promise.resolve([]);

// В then отдается функция, а не ее вызов!
const promise = filePaths.reduce((acc, path) => {
    // Аккумулятор – всегда промис, внутри которого массив с содержимым файлов
    return acc.then((contents) =>
        // Читаем файл и добавляем его данные в аккумулятор
        fsp.readFile(path)
            .then((data) => {
                return contents.concat(data);
            })
            .catch(err => {
                console.log(err);
                return contents.concat('null');
        })
    );
}, initPromise);
promise.then(res => console.log(res.map(el => el.toString('utf-8'))));


/*  Реализуйте и экспортируйте асинхронную функцию getTypes(), которая анализирует список переданных путей
и возвращает массив (в промисе), с описанием того, что находится по каждому из путей.

Эта функция должна отрабатывать успешно в любом случае.
Если во время выполнения асинхронной операции возникла ошибка, то значением для этого пути будет null.
Для простоты считаем, что в эту функцию всегда передается как минимум один путь для обработки */
const arrayOfPaths = ['H:\\Hexlet_Algo\\haha.txt', 'H:\\Hexlet_Algo\\file.tx', 'H:\\Hexlet_Algo\\', 'H:\\Hexlet_Algo\\file.txt'];

function getTypes(arrayOfPaths){
    const initPromise = Promise.resolve([]);
    return arrayOfPaths.reduce((acc, path) =>{
        return acc.then((contents) =>
            fsp.stat(path)
                .then(data => {
                    data = data.isDirectory()? 'directory': 'file';
                    return contents.concat(data);
                }).catch(err =>{
                    console.log(err);
                    return contents.concat(null);
            }))
    }, initPromise);
}

getTypes(arrayOfPaths).then(res => console.log('getTypes res:',res));

function wait(ms){
    return new Promise((fulfill) =>{
        setTimeout(fulfill,ms);
    })
}

wait(2000).then(res => console.log('done'));

async function exchange(file1, file2){
    const [first, second] = await Promise.all([fsp.readFile(file1),fsp.readFile(file2)]);
    await Promise.all([fsp.writeFile(file1,second), fsp.writeFile(file2,first)]);
}

exchange('H:\\Hexlet_Algo\\haha.txt', 'H:\\Hexlet_Algo\\file.txt');

