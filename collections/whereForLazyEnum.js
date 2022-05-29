/*Реализуйте метод where(), основываясь на следующем интерфейсе:
Функция может принимать любое количество параметров, каждый из которых может быть либо функцией, либо объектом.
Для функций должна осуществляться простая фильтрация,
для объектов нужно проверять соответствие элемента коллекции значениям по тем же ключам, что и в переданном объекте.
        Подсказки:
Извлечь ключи из объекта можно функцией Object.keys().
Проверка на функцию: typeof <value> === 'function'.
Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.*/

class Enumerable {
    constructor(collection, operations) {
        this.collection = collection;
        this.operations = operations || [];
    }

    build(fn) {
        return new Enumerable(this.collection.slice(), this.operations.concat(fn));
    }

    // BEGIN (write your solution here)
    where(...funcOrObj){
        let collToHandle = this.collection.slice();
        funcOrObj.forEach(fo =>{
            if(typeof(fo) === 'function'){
               collToHandle = collToHandle.filter(fo); // el => fo(el)
            } else {
                    function predicate(el){
                        const crit = Object.values(fo);
                        const car = Object.values(el);
                        return crit.every((e) => car.includes(e));
                    }
                collToHandle = collToHandle.filter(predicate);
            }

        })
        return new Enumerable(collToHandle);
    }
    // END

    getProcessedCollection() {
        if (!this.memo) {
            this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
        }

        return this.memo;
    }

    get length() {
        return this.getProcessedCollection().length;
    }

    toArray() {
        return this.getProcessedCollection().slice();
    }
}

export default Enumerable;

const cars = [
    { brand: 'bmw', model: 'm5', year: 2014 },
    { brand: 'bmw', model: 'm4', year: 2013 },
    { brand: 'kia', model: 'sorento', year: 2014 },
    { brand: 'kia', model: 'rio', year: 2010 },
    { brand: 'kia', model: 'sportage', year: 2012 },
];

const coll = new Enumerable(cars);

const result = coll
    .where(car => car.brand === 'kia')
    .where(car => car.year > 2011);

console.log(result.toArray());
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]

const result2 = coll.where({ brand: 'bmw' });
console.log(result2.toArray());
// [
//   { brand: 'bmw', model: 'm5', year: 2014 },
//   { brand: 'bmw', model: 'm4', year: 2013 },
// ]

const result3 = coll.where({ brand: 'kia', model: 'sorento' });
console.log(result3.toArray());
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

const result5 = coll.where({ brand: 'kia' }, {  model: 'sorento' });
console.log(result5.toArray());
// [
//   { brand: 'kia', model: 'sorento', year: 2014 },
// ]

const result4 = coll.where({ brand: 'kia' }, car => car.year < 2013);
console.log(result4.toArray());
// [
//   { brand: 'kia', model: 'rio', year: 2010 },
//   { brand: 'kia', model: 'sportage', year: 2012 },
// ]