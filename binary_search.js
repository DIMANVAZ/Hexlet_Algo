// Реализуйте и экспортируйте по умолчанию функцию, которая ищет телефонный номер по имени.
// Телефонная книга отсортирована по именам

const phoneBook = [
    { name: 'Alex Bowman', number: '48-2002' },
    { name: 'Aric Almirola', number: '10-1001' },
    { name: 'Bubba Wallace', number: '23-1111' },
];

// бинарный поиск
function findNumberByName(phoneBook, name){
    let startIndex = 0;
    let endIndex = phoneBook.length - 1;

    while(startIndex <= endIndex){
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        if (name.localeCompare(phoneBook[midIndex].name) === 0){
            return phoneBook[midIndex].number;
        }   else if (name.localeCompare(phoneBook[midIndex].name) === -1){
            endIndex = midIndex - 1;
        }   else {
            startIndex = midIndex + 1;
        }
    }
    return null;
}

findNumberByName(phoneBook, 'Alex Bowman'); // '48-2002'
findNumberByName(phoneBook, 'None'); // null

console.log(findNumberByName(phoneBook, 'Alex Bowman'));
console.log(findNumberByName(phoneBook, 'None'));

// тренировка баловство для вспоминания
// код подразумевает, что элемент в массиве точно есть!
const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12];
const key = 12;
function binSea(arr, key){
    const pivot = Math.floor(arr.length/2);
    if(arr[pivot] === key){
        return arr[pivot];
    } else{
        if(key > arr[pivot]){
            return binSea(arr.slice(pivot, arr.length),key);
        } else{
            return binSea(arr.slice(0,pivot),key)
        }
    }
}

console.log(binSea(arr,key));
