/*Подобное задание уже было в курсе по абстракциям с помощью данных.
Теперь мы делаем то же самое, но используя объекты и методы. Нормализацию дробей делать не нужно.

Реализуйте и экспортируйте по умолчанию функцию, которая создает рациональное число.
Рациональное число должно быть представлено объектом со следующими методами:
    Сеттер setNumer() - устанавливает числитель
    Сеттер setDenom() - устанавливает знаменатель
    Геттер getNumer() - возвращает числитель
    Геттер getDenom() - возвращает знаменатель
    Геттер toString() - возвращает строковое представление числа
    Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает новое рациональное число (не изменяет текущее!)
*/

function make(numer,denom){
    return {
        numer,
        denom,
        setNumer(numer){
            this.numer = numer;
            return this;
        },
        setDenom(denom){
            this.denom = denom;
            return this;
        },
        getNumer(){
            return this.numer;
        },
        getDenom(){
            return this.denom;
        },
        toString(){
            return `${this.getNumer()}/${this.getDenom()}`
        },
        add(rat2){
            const numer1 = this.numer;
            const denom1 = this.denom;
            const numer2 = rat2.getNumer();
            const denom2 = rat2.getDenom();
            const commonDenom = denom1*denom2;
            const sumOfNumers = numer1*denom2 + numer2*denom1;
            return make().setNumer(sumOfNumers).setDenom(commonDenom)
        }
    }
}

const rat1 = make();
rat1.setNumer(3);
rat1.setDenom(8);
rat1.getNumer(); // 3
rat1.getDenom(); // 8

const rat2 = make(10, 3);

// Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
const rat3 = rat1.add(rat2);
console.log(rat3.toString()); // '89/24'

const x = function (num = 0){
    return this.a + num;
}
const y = x.bind({a:5},7);
console.log(y());
