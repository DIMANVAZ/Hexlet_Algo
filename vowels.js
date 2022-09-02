
function sortByVowels(wordsArray){
    const allVowels = ["a", "e", "i", "o", "u"];
    function vowelsCounter(word){
        let nOfVowels = 0;
        for (let i = 0; i < word.length; i++) {
            if(allVowels.includes(word[i].toLowerCase())){
                nOfVowels++;
            }
        }
        return nOfVowels;
    }
    return wordsArray.sort((word1,word2) => vowelsCounter(word1)-vowelsCounter(word2)).join(' ');
}

console.log(sortByVowels(['ck','uuuAAAooo','dog', 'cat', 'house', 'flatmap', 'aaa', 'UUUUU']));


for (let i = 2; i <= 7; i++) {
    if(i % 10 === 5 ){
        break;
    }
    console.log(i);
}
// 2 3 4
console.log('-------')
for (let i = 2; i <= 7; i++) {
    if(i % 10 === 5 ){
        continue;
    }
    console.log(i);
}
// 2 3 4 6 7

console.log('Rumbo Jumbo Obama');
for (let i = 0; i < 99; i++) {
    if(i > 2){
        break;
    }
    console.log('Banana!');
}

