/*  Для работы с текстом в вебе бывает полезна функция truncate(), которая обрезает слишком длинный текст и
ставит в конце многоточие:

    truncate('long text', { length: 3 }); // lon...

Реализуйте в классе Truncater конструктор и метод truncate(). Метод принимает текст и следующие опции:

    separator - символ, заменяющий обрезанную часть строки
    length - максимальная длина исходной строки. Если строка короче, чем эта опция, то возвращается исходная строка.
Конфигурацию по умолчанию можно переопределить через конструктор класса и вторым аргументом метода truncate().
Оба способа можно комбинировать.

Опции по умолчанию заданы, как статическое свойство класса.
Обратите на это внимание при объединении исходных опций с пользовательскими.    */

export default class Truncater {
    static defaultOptions = {
        separator: '...',
        length: 200,
    };

    // BEGIN (write your solution here)
    constructor(instanceOptions = {}) {
        // переменные экземпляра по умолчанию:
        this.separator = Truncater.defaultOptions.separator;
        this.length = Truncater.defaultOptions.length;

        // если входные параметры не пусты:
        if(Object.hasOwn(instanceOptions, 'separator')){
            this.separator = instanceOptions.separator;
        }
        if(Object.hasOwn(instanceOptions, 'length')){
            this.length = instanceOptions.length;
        }
    }

    truncate(word, onceOptions ={}){
        // переменные однократного запуска по умолчанию:
        let sep = this.separator;
        let len = this.length;

        // если входные параметры не пусты:
        if(Object.hasOwn(onceOptions, 'separator')){
            sep = onceOptions.separator;
        }
        if(Object.hasOwn(onceOptions, 'length')){
            len = onceOptions.length;
        }

        const sliced = word.substring(0,len);
        return sliced === word ? word : sliced.concat(sep);
    }

    show(){
        console.log(Truncater.defaultOptions);
        console.log(this.constructor.defaultOptions);
    }
    // END
}

//'Truncater with default options'
const truncater = new Truncater();
console.log(truncater.truncate('one two',{})); //'one two'
console.log(truncater.truncate('one two',{ length: 6 })); //'one tw...'
console.log(truncater.truncate('one two',{ separator: '.' })); //'one two'
console.log(truncater.truncate('one two',{ length: 3 })); //'one...'
console.log(truncater.truncate('one two',{ length: 7 })); //'one two'

console.log('-------------------------');

// 'Truncater with custom length'
const truncater2 = new Truncater({ length: 3 });
console.log(truncater2.truncate('one two',{})); //'one...'
console.log(truncater2.truncate('one two',{ separator: '!' })); //'one!'
console.log(truncater2.truncate('one two',{})); //'one...'
console.log(truncater2.truncate('one two',{ length: 7 })); //'one two'

console.log('-------------------------');

// 'Truncater with custom separator'
const truncater3 = new Truncater({ separator: '__' });
console.log(truncater3.truncate('one two',{})); //'one two'
console.log(truncater3.truncate('one two',{ length: 3 })); //'one__'
console.log(truncater3.truncate('one two',{ length: 5, separator: '' })); //'one t'
console.log(truncater3.truncate('one two',{})); //'one two'

truncater3.show()