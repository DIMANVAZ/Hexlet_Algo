/* Реализуйте ленивую версию Enumerable.
Интерфейс включает в себя следующие методы: select(), where(), orderBy(), toArray().

Так как коллекция ленивая, не нужно выполнять вычислений до вызова toArray(),
вместо этого необходимо формировать коллекцию из отложенных вычислений. */

class Enumerable {
    constructor(collection, operations) {
        this.collection = collection;
        this.operations = operations || [];
    }

    select(fn){
        const newOperations = this.operations.slice(); // копия массива операций
        newOperations.push(colle => colle.map(fn));    // в массив операций пишем функцию, которая будет возвращать окученную коллекцию
        return new Enumerable(this.collection.slice(), newOperations); // и запускаем
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
        return new Enumerable(this.collection.slice(), newOperations);
    }

    where(fn) {
        const newOperations = this.operations.slice(); //копия массива операций
        newOperations.push(colle => colle.filter(fn)); // в массив операций пишем функцию...
        return new Enumerable(this.collection.slice(), newOperations);
    }

    toArray() {
        let collToOper = this.collection.slice();
        for (let i = 0; i < this.operations.length; i++) {
            collToOper = this.operations[i](collToOper);
        }
        return collToOper;

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

const coll1 = new Enumerable(cars);
const coll2 = new Enumerable(cars);
const coll3 = new Enumerable(cars);
const coll4 = new Enumerable(cars);
const coll5 = new Enumerable(cars);
const coll6 = new Enumerable(cars);

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






// const coll = new Enumerable(cars);
//
// const result2 = coll.select(car => car.model);
// console.log(result2.toArray());
//
// //assert.deepEqual(result2.toArray(), ['m5', 'm4', 'sorento', 'rio', 'sportage']);
//
// const result = coll.orderBy(car => car.year, 'desc')
//     .where(car => car.brand === 'bmw')
//     .select(car => car.model);
// console.log(result.toArray());
//
// //assert.deepEqual(result.toArray(), ['m5', 'm4']);
