/* Реализуйте ленивую версию Enumerable.
Интерфейс включает в себя следующие методы: select(), where(), orderBy(), toArray().

Так как коллекция ленивая, не нужно выполнять вычислений до вызова toArray(),
вместо этого необходимо формировать коллекцию из отложенных вычислений. */

class LazyEnumerable {
    constructor(collection, operations) {
        this.collection = collection;
        this.operations = operations || [];
    }

    // на примере select покажу, как работает ленивый метод
    select(fn){
        // копируем массив операций данного экземпляра:
        const newOperations = this.operations.slice();

        // в эту копию массива операций добавляем функцию, которая будет возвращать окученную коллекцию
        newOperations.push(colle => colle.map(fn));

        // возвращаем новый instance, передавая НЕ_ИЗМЕНЁННУЮ копию коллекции и массив операций с добавленной своей:
        return new LazyEnumerable(this.collection.slice(), newOperations);
        // это пригодится для Fluent Interface
    }

    orderBy(valueFn, direction = 'asc'){
        function handler(a,b){
            const ascDesc = direction === 'desc' ? -1 : 1;

            if (valueFn(a) > valueFn(b)){
                return ascDesc;
            }
            if (valueFn(a) < valueFn(b)){
                return -ascDesc;
            }
        }
        const newOperations = this.operations.slice(); //копия массива операций
        newOperations.push(colle => colle.sort(handler)); // в массив операций пишем функцию...
        return new LazyEnumerable(this.collection.slice(), newOperations);
    }

    where(fn) {
        const newOperations = this.operations.slice(); //копия массива операций
        newOperations.push(colle => colle.filter(fn)); // в массив операций пишем функцию...
        return new LazyEnumerable(this.collection.slice(), newOperations);
    }

    // toArray является "спусковым крючком" для методов.
    // Методы содержатся в массиве методов this.operations, который наполнится к моменту, когда будет вызван .toArray()
    toArray() {
        let collToOper = this.collection.slice();
        for (let i = 0; i < this.operations.length; i++) {
            collToOper = this.operations[i](collToOper);
        }
        return collToOper;
    }
    // мы последовательно идём по массиву операций и передаём дальше по нему окученную на шаге i-1 коллекцию
}

export default LazyEnumerable;

const cars = [
    { brand: 'bmw', model: 'm5', year: 2014 },
    { brand: 'bmw', model: 'm4', year: 2013 },
    { brand: 'kia', model: 'sorento', year: 2014 },
    { brand: 'kia', model: 'rio', year: 2010 },
    { brand: 'kia', model: 'sportage', year: 2012 },
];

const coll1 = new LazyEnumerable(cars);
const coll2 = new LazyEnumerable(cars);
const coll3 = new LazyEnumerable(cars);
const coll4 = new LazyEnumerable(cars);
const coll5 = new LazyEnumerable(cars);
const coll6 = new LazyEnumerable(cars);

const result1 = coll1.select((car) => car.model);
console.log(result1.toArray());
//['m5', 'm4', 'sorento', 'rio', 'sportage']

const result2 = coll2.orderBy((car) => car.year).select((car) => car.year);
console.log(result2.toArray());
//[2010, 2012, 2013, 2014, 2014];

const result3 = coll3.orderBy((car) => car.year, 'desc').select((car) => car.year);
console.log(result3.toArray());
//[2014, 2014, 2013, 2012, 2010];

const result4 = coll4.where((car) => car.year === 2014).select((car) => car.brand);
console.log(result4.toArray());
//['bmw', 'kia']);

coll5.orderBy((car) => car.year, 'asc').toArray();
const result5 = coll5.where((car) => car.brand === 'kia')
    .where((car) => car.year > 2011).select((car) => car.model);
console.log(result5.toArray());
//['sorento', 'sportage']);

const result6a = coll6.select((car) => car.model);
const result6b = coll6.where((car) => car.year === 2014).select((car) => car.brand);

console.log(result6a.toArray()); // ['m5', 'm4', 'sorento', 'rio', 'sportage']
console.log(result6b.toArray()); // ['bmw', 'kia']

