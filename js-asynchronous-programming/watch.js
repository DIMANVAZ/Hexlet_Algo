import fs from 'fs';

const filepath = 'H:\\Hexlet_Algo\\file.txt'

export default function watch(path, period, callback){
    let fileLastStatus = Date.now(); //начало работы - считаем, что на этот момент файл не менялся.
    console.log('Старт большой программы. Время изменения файла  = времени старта');

    const id = setInterval(()=>{
        fs.stat(path, (err,data)=>{
            if(err){
                clearInterval(id);
                callback(err);
                return;
            }
            if ((data.mtimeMs - fileLastStatus) < period){ // изменение произошло меньше, чем за время цикла
                fileLastStatus = data.mtimeMs;
                console.log('Замечено изменение. Время последнего изменения перезаписано. Вызываем колбек.');
                callback(null);

            } else if ((data.mtimeMs - fileLastStatus) >= period){
                fileLastStatus = Date.now();
                console.log('Изменений не замечено. Считаем, что время изменения файла = начало очередного цикла.');
            }
        })
    }, period);

    return id;
}

const id = watch(filepath, 500, (err) => {
    console.log('Wow!');
});

let counter = 0;
setTimeout(() => fs.appendFileSync(filepath, `${++counter}`), 800);
setTimeout(() => fs.appendFileSync(filepath, `${++counter}`), 800);
setTimeout(() => fs.appendFileSync(filepath, `${++counter}`), 800);
setTimeout(() => clearInterval(id), 5000); // остановить отслеживание через 5 секунд

/*асинхронную функцию, которая следит за изменением файла с заданной периодичностью.
Функция должна возвращать идентификатор таймера, запущенного внутри.

Если файл был изменён со времени предыдущей проверки, то необходимо вызвать колбек.
Если во время анализа файла (через fs.stat) произошла ошибка, то нужно остановить таймер и вызвать колбек, передав туда ошибку.

Отслеживание изменений файла должно начинаться с момента вызова функции. Параметры функции:

Путь до файла, который нужно отслеживать
Период отслеживания
Колбек, принимающий аргументом ошибку*/

