import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

const getFileOwners = (dirpath, cb) => {
    fs.readdir(dirpath, (_error1, filenames) => {

        const readFileStat = (items, result = []) => {
            if (items.length === 0) {
                // Обработку ошибок пока не рассматриваем
                cb(null, result);
                return;
            }
            const [first, ...rest] = items;
            const filepath = path.join(dirpath, first);
            fs.stat(filepath, (_error2, stat) => {
                readFileStat(rest, [...result, { filename: first, owner: stat.uid }]);
            });
        };

        readFileStat(filenames);
    });
};

/* Реализуйте и экспортируйте асинхронную функцию compareFileSizes(),
которая сравнивает размеры двух файлов и передает результат сравнения в переданную callback-функцию.
Если первый файл больше второго, то она передает единицу, если размеры равны, то ноль, иначе — -1.
Применить Math.sign;
*/

function compareFileSizes(file1, file2, cb){
    fs.stat(file1,(err,data1)=>{
        fs.stat(file2,(err,data2)=>{
            cb(null, Math.sign(data1.size - data2.size));
        });
    });
}

compareFileSizes('../academic_cap.ico', '../binary_search.js', (_err, result) => console.log(result));

/* Реализуйте и экспортируйте функцию move, которая асинхронно перемещает файл из одного места в другое. Ее параметры:

    - Путь до файла исходника
    - Путь по которому нужно копировать файл
    - Колбек, у которого единственный аргумент — ошибка.

Алгоритм работы функции следующий:

    1) Читаем исходный файл
    2) Создаём новый файл и записываем туда данные исходного файла (это важно сделать до попытки удаления исходного файла!)
    3) Удаляем исходный файл

Если ошибка не возникла, то мы всё равно вызываем исходный колбек и передаём туда null.
Вызывать его обязательно, иначе внешний код не дождётся окончания операции.   */

export function move(whatCopy, whereToCopy, errHandlerCb){
    fs.readFile(whatCopy,'utf-8',(err,data)=>{
        if(err){
            errHandlerCb(err);
            return;
        }
        fs.writeFile(whereToCopy, data, 'utf-8',(err)=>{
            if(err){
                errHandlerCb(err);
                return;
            }
            fs.unlink(whatCopy, (err)=>{
                if(err){
                    errHandlerCb(err);
                    return;
                }
                errHandlerCb(null);
            })
            // или: fs.unlink(whatCopy, errHandlerCb);
        })
    })
}

move('./train2.js', './train2_copy.js', (error) => {
    if (error) {
        console.log('oops');
        return;
    }
    console.log('yes!')
});

/* Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории,
не включая поддиректории. Анализ размера файла должен происходить параллельно, для этого воспользуйтесь библиотекой async.

    fs.readdir() - чтение содержимого директории, возвращает файлы и папки в директории
    path.join() - конструирует пути
    async.map()
    fs.stat() - информация о файле. В получаемом объекте содержится метод isFile() для проверки, является ли элемент файлом
    _.sumBy() - нахождение суммы в массиве

Колбек должен вызываться и в случае ошибки */

function getDirectorySize(dirpath, cb){
    fs.readdir(dirpath, (error1, filenames) => {
        if (error1) {
            cb(error1);
            return;
        }
        const filepaths = filenames.map((name) => path.join(dirpath, name));

        async.map(filepaths, fs.stat, (error2, stats) => {
            if (error2) {
                cb(error2);
                return;
            }
            const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
            cb(null, sum);
        });
    });
}

getDirectorySize('H:\\Hexlet_Algo\\', (err, size) => {
    console.log(size);
});

/*Реализуйте и экспортируйте асинхронную функцию reverse(), которая
изменяет порядок расположения строк в файле на обратный. Функция должна перезаписать файл.*/
const { promises: fsp } = fs;

function reverse(filePath){
    fsp.readFile(filePath, 'utf-8')
        .then(data => {
                fsp.writeFile(filePath, data
                    .split('\n')
                    .reverse()
                    .join('\n')).then(() => console.log('Finished'));
        });
}

reverse('H:\\Hexlet_Algo\\file.txt');

// Реализуйте и экспортируйте асинхронную функцию touch(), которая создаёт файл, если его не существует.
export function touch(path){
    return fsp.access(path)
        .then(()=>{})
        .catch(e => fsp.writeFile(path,''))
}

touch('H:\\Hexlet_Algo\\haha.txt').then(()=> console.log('created'));


// ['directory', 'file', null]