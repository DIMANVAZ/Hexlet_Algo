/*  Реализуйте и экспортируйте по умолчанию абстракцию "Деньги".
Она знает о валюте денег, позволяет их конвертировать в другие валюты, выполнять арифметические операции и форматировать вывод.
Наша реализация поддерживает только две валюты: usd и eur без возможности расширения. Коэффициенты конверсии:
usd -> eur = 0.7
eur -> usd = 1.2    */

//  создает объект-деньги.
export default function Money(value, currency = 'usd'){
    this.value = value;
    this.currency = currency;
}

//  возвращает стоимость в виде числа
Money.prototype.getValue = function getValue(){
    return this.value;
}

//  возвращает валюту денег
Money.prototype.getCurrency = function getCurrency(){
    return this.currency;
}

// возвращает новый объект-деньги, где значение конвертировано в указанную валюту
Money.prototype.exchangeTo = function exchangeTo(currency){
    //usd -> eur = 0.7
    //eur -> usd = 1.2
    let newValue = this.getValue(); // а мало ли, вдруг валюты совпали
    if(this.getCurrency() !== currency){
       this.getCurrency() === 'usd' ? newValue = this.getValue() * 0.7 : newValue = this.getValue() * 1.2;
    }
    return new Money(newValue, currency)

}

// возвращает новый объект-деньги, который представляет из себя сумму исходных и переданных денег,
// в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
Money.prototype.add = function add(money){
    let value = this.getValue() + money.getValue();
    if(money.getCurrency() !== this.getCurrency()){
        value = money.exchangeTo(this.getCurrency()).getValue() + this.getValue();
    }
    return new Money(value, this.getCurrency())
}

//  возвращает локализованное представление денег удобное для вывода
Money.prototype.format = function format(){
    return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() })
}

//Number.prototype.toLocaleString() – умеет форматировать вывод денег в нужной локали.
// Если передать undefined первым параметром, то установится текущая локаль. Пример работы метода:

const gbp = (4000).toLocaleString(undefined, { style: 'currency', currency: 'gbp' });
console.log(gbp); //£4,000.00

const money1 = new Money(100);

// Возвращает значение
console.log(money1.getValue()); // 100
console.log(money1.getCurrency()); // 'usd'

// Конвертирует в указанную валюту и возвращает новое значение
console.log(money1.exchangeTo('eur').getValue()); // 70

const money2 = new Money(200, 'eur');
console.log(money2.getValue()); // 200

const money3 = money2.add(money1);
console.log(money3.getValue()); // 270

const money4 = money1.add(money2);
money4.getValue(); // 340

money1.format(); // "$100.00"
money2.format(); // "€200.00"

const money5 = new Money(10000);
money5.format(); // "$10,000.00"

