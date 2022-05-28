/*Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход два множества и возвращает множество,
составленное из таких элементов, которые есть в первом множестве, но нет во втором.*/

export default function difference(setOne, setTwo){
    const finSet = new Set();
    setOne.forEach(el => {
        if (!setTwo.has(el)){
            finSet.add(el);
        }
    })
    return finSet;
}
console.log(difference(new Set([2, 1]), new Set([2, 3])));;
// → [1]

class A{
    get_foo(){
        console.log('Да фуу');
    }
    get_bar(){
        console.log('Мини бар');
    }
}

const a = new A();
const foo = '';

a[`get_${Object.keys({foo})[0]}`](); // Да фуу
console.log(Object.keys(foo)); // []
console.log(Object.keys({foo})); //[ 'foo' ]