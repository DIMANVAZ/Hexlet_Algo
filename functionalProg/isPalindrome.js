//определение, слово - палиндром или нет
function isPalindrome(word){
    if(word.length < 2 ){
        return true;
    }
    if(word[0] === word[word.length-1]){
        return isPalindrome(word.slice(1,-1))
    }
    return false;
}

console.log(isPalindrome('radar')); // true
console.log(isPalindrome('a'));     // true
console.log(isPalindrome('abs'));   // false

