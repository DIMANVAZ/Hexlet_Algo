/*Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход текст
и возвращает массив состоящий из первых слов каждой строки текста.
Пустые строчки должны игнорироваться.

Строки разделяются переводом строки
В любом месте строки может быть сколько угодно пробелов
Текст должен перебираться посимвольно (мы пишем лексер)         */

function solution(text){
    const finArray = [];
    let state = 'newLine'; //isFirstWord, inLine, newLine
    let fws = 0;
    for (let i = 0; i < text.length; i++) {
        const symbol = text[i];

        switch (state){
            case "newLine":{
                if(symbol !== ' ' && symbol !== '\n'){
                    state = 'isFirstWord';
                    fws = i;
                }
            } break;

            case "isFirstWord":{
                if(symbol === ' '){
                    state = 'inLine';
                    const firstWord = text.slice(fws,i);
                    finArray.push(firstWord);
                }
                if(symbol === '\n'){
                    state = 'newLine';
                    const firstWord = text.slice(fws,i);
                    finArray.push(firstWord);
                }
                if(i === text.length-1){
                    state = 'newLine';
                    const firstWord = text.slice(fws,i+1);
                    finArray.push(firstWord);
                }
            } break;

            case "inLine":{
                if(symbol === '\n'){
                    state = 'newLine';
                }
            } break;

            default:{
                console.log('Без статуса!');
            } break;
        }
        //console.log('position = ',i, ' state = ',state)
    }
    return finArray;
}


const text1 = '  what who   \nhellomy\n hello who are you\n';

const text2 = [
    '\n\n  what who   \n',
    'hellomy\n',
    ' hello who are you\n',
].join('');

const text3 = [
    '\n\n  hi   \n',
    'hey how are you doing?\n',
    ' hello who are you',
].join('')

const text4 = [
    '\n\n  hi   \n',
    'hi how are you doing?\n',
    ' hello who are you',
].join('');

const text5 = [
    '\n\n  hi   \n',
    'hi how are you doing?\n',
    ' hello',
].join('')

console.log(solution(text1));
console.log(solution(text2));
console.log(solution(text3));
console.log(solution(text4));
console.log(solution(text5));

