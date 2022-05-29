class Enumerable {
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
        return new Enumerable(this.collection.slice(), newOperations);
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
        return new Enumerable(this.collection.slice(), newOperations);
    }

    where(fn) {
        const newOperations = this.operations.slice(); //копия массива операций
        newOperations.push(colle => colle.filter(fn)); // в массив операций пишем функцию...
        return new Enumerable(this.collection.slice(), newOperations);
    }

    // toArray является "спусковым крючком" для методов.
    // Методы содержатся в массиве методов this.operations, который наполнится к моменту, когда будет вызван .toArray()
    toArray() {
        if(!this.memo){
            let collToOper = this.collection.slice();
            for (let i = 0; i < this.operations.length; i++) {
                collToOper = this.operations[i](collToOper);
            }
            this.memo = collToOper;
        }
        return this.memo;
    }
    // мы последовательно идём по массиву операций и передаём дальше по нему окученную на шаге i-1 коллекцию

    get length(){
        return this.toArray().length;
    }
}

export default Enumerable;