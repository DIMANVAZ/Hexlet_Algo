/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два параметра:
список слов и список стоп-слов. Задача функции вернуть объект типа Map, содержащий в себе частоту переданных слов.
То есть, ключами являются сами слова, а значениями число повторений.

Слова могут быть в разных регистрах, а подсчет должен работать без учета регистра.
Соответственно в результирующем наборе слова должны быть представлены в нижнем регистре.
Порядок слов в выходе должен совпадать с порядком появления новых слов во входном наборе.
stopWords – это список стоп-слов, которые не должны попадать в результирующую структуру.
Стоп-слова указываются в нижнем регистре.

Воспользуйтесь тройкой map | filter | reduce
Функция has типа Map проверяет, существует ли в мапе элемент с указанным ключом
Проверка должна быть регистронезависимой
*/

import {l} from "@hexlet/pairs-data";

export default function wordsCount(words, stopWords){
    const finMap = new Map();
    const low = word => word.toLowerCase();
    const lowStops = stopWords.map(low);
    const lowWords = words.map(low);
    lowWords.forEach(word => {
        if(lowStops.indexOf(word) === -1){
            finMap.has(word) ?
                finMap.set(word,finMap.get(word)+1)
              : finMap.set(word,1);
        }
    })
    return finMap;
}

const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
console.log(wordsCount(words, stopWords)); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]

