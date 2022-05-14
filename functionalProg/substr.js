// В JS у строк есть метод substr. В этом задании мы его реализуем самостоятельно.
// Просьба не использовать этот метод и метод slice внутри вашей реализации.
export default function substr(string,startIndex=0,length = string.length){
    if(length === 0){
        return ''
    }
    if(length < 0){
        length = 1;
    }
    if(startIndex < 0){
        startIndex = 0;
    }
    if(startIndex + length > string.length){
        length = string.length - startIndex; // проверить по индексу -1
    }
    let answer = '';
    for (let i = startIndex; i < startIndex + length ; i++) {
        answer += string[i];
    }
    return answer;
}

console.log(substr('abba', 0, 1));    // a
console.log(substr('abba', 1, 2));    // bb
console.log(substr('abba', -10, 2));  // ab
console.log(substr('abba', -1, 100)); // abba
console.log(substr('abba', -1, -1));  // a
console.log(substr('abba', 1, -10));  // b
console.log(substr('abba', 1, 10));   // bba
console.log(substr('abba', 1, 0));    // ''
console.log(substr('abba', 100, 3));  // ''
console.log(substr(''));     // ''
console.log(substr('abba')); // abba


