/* Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя покупательскую корзину. Интерфейс:

addItem(item, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]
getCost – возвращает стоимость корзины. Общая стоимость корзины высчитывается как стоимость всех добавленных товаров с учетом их количества.
getCount – возвращает количество товаров в корзине*/

export default class Cart{
    constructor() {
        this.items = [];
    }

    addItem(item,count) {
        this.items.push({item:item, count:count})
    }

    getItems(){
        return this.items;
    }

    getCost(){
        return this.items.reduce((acc,order) => {
            return acc + order.item.price * order.count
        },0)
    }

    getCount(){
        return this.items.reduce((acc,order) => {
            return acc + order.count;
        },0)
    }
}

const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
console.log(cart.getItems().length); // 2
console.log(cart.getCost()); // 35

