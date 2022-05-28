/* Реализуйте метод select(), который отображает (принцип работы как у функции map()) коллекцию, другими словами,
извлекает из элементов коллекции нужные данные и возвращает объект с новой (отображенной) коллекцией из этих данных.*/

/* Реализуйте метод orderBy(), который сортирует коллекцию на основе переданных данных.
Принимаемые параметры:
- Функция, возвращающая значение, по которому будет происходить сортировка.
- Направление сортировки: asc — по возрастанию, desc — по убыванию (по умолчанию — asc).
Если передан некорректный параметр, то для сортировки используется значение по умолчанию.*/

class Enumerable {
    constructor(collection) {
        this.collection = collection;
    }

    select(fn){
        return new Enumerable(this.collection.map(fn));
    }

    orderBy(valueFn, direction = 'asc'){
        function handler(a,b){
            return valueFn(a) > valueFn(b) ? 1: -1;
        }
        if(direction === 'desc'){
            return new Enumerable(
                this.collection
                .map(el =>el) // для создания копии просто, вместо .slice() в уроке
                .sort(handler)
                .reverse());
        }

        return new Enumerable(
            this.collection
                .filter(el => true) // для создания копии просто, вместо .slice() в уроке
                .sort(handler));
    }

    where(fn) {
        this.collection = this.collection.filter(fn);
        return this;
    }

    toArray() {
        return this.collection.slice();
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

const result2 = coll.select(car => car.model);
console.log(result2.toArray());

//assert.deepEqual(result2.toArray(), ['m5', 'm4', 'sorento', 'rio', 'sportage']);

const result = coll.orderBy(car => car.year, 'desc')
    .where(car => car.brand === 'bmw')
    .select(car => car.model);
console.log(result.toArray());

//assert.deepEqual(result.toArray(), ['m5', 'm4']);


