/*Реализуйте и экспортируйте функцию-обёртку parseJson() для функции JSON.parse(), которая работает как встроенная.
Но в случае если в функцию была передана некорректная json строка, функция должна выбросить исключение ParseError.
Класс ParseError реализовывать не нужно, он уже импортирован.   */
import ParseError from './ParseError.js';

export default function parseJson(someJson){
    try{
        return JSON.parse(someJson);
    }
    catch (e) {
        throw new ParseError('incorrect json!');
    }
}

const json = '{ "key": "value" }';
parseJson(json); // { key: 'value' }

const incorrectJson = '{ key": "value" }';
parseJson(incorrectJson); // => ParseError: Invalid JSON string
