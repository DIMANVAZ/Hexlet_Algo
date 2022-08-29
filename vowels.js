
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


