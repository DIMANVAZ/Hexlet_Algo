export default function sayPrimeOrNot(number){
    function check(number){
        const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        return arr.includes(Math.abs(number));
    }
    return check(number) ?  console.log('yes') :  console.log('no');
}

// function check(number){
//     const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
//         return arr.includes(Math.abs(number));
//     }

sayPrimeOrNot(7)
sayPrimeOrNot(8)