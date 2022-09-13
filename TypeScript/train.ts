function anagramator(word1: string, word2: string){
    if (word1.length !== word2.length){
        return false;
    }

    for (let i = 0; i < word1.length; i++) {
        const index2 = word2.indexOf(word1[i]);

        if(index2 > -1){
            word2 = word2.replace(word2[index2],'*');
        } else return false;
    }
    return true;
}

function filterAnagrams (word: string, array: string[]){
    return array.filter(el => anagramator(word,el));
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

type Bike = {
    brand:string,
    year:number,
    used:boolean
}

const oldHonda:Bike = {
    brand:'honda',
    year:1998,
    used:true
}

function buy(transport:Bike){
    return `${transport.brand} was bought`;
}

console.log(buy(oldHonda));


type Course = {
    name:string,
    lessons:string[];
}
function isComplete(course:Course){
    return course.lessons.length > 3;
}

const course1 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
};
console.log(isComplete(course1)); // false