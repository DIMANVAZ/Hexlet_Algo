/*  Каждый тип валидации в таких системах обычно представлен классом-валидатором,
который принимает на вход опции и предоставляет интерфейс в виде функции validate().
Эта функция принимает на вход то, что проверяется (валидируется) и возвращает массив или объект с ошибками.
Если объект пустой, значит ошибок нет.

Реализуйте и экспортируйте по умолчанию класс PasswordValidator, ориентируясь на тесты.

Этот валидатор поддерживает следующие опции:
    minLength (по умолчанию 8) - минимальная длина пароля
    containNumbers (по умолчанию true) - требование содержать хотя бы одну цифру
Опции передаются одним объектом в конструктор валидатора.
Объект ошибок в ключах содержит название опции, а в значениях текст, указывающий на ошибку (тексты можно подсмотреть в тестах)  */

export default class PasswordValidator{
    constructor(options = {}) {
        const defaultOptions = {
            minLength: 8,
            containNumbers: true,
        };

        this.options = { ...defaultOptions, ...options };
    }

    validate(password){
        const res = {};
        if (password.length < this.options.minLength){
            res.minLength = 'too small';
        }
        if(this.options.containNumbers === true && isNaN(parseInt(password.match(/\d+/)))){
            res.containNumbers = 'should contain at least one number';
        }
        return res;
    }
}

const validator = new PasswordValidator({ containNumbers: false });
console.log(validator.validate('qwertyui')); // {}
console.log(validator.validate('qwerty')); // { minLength: 'too small' }
console.log(validator.validate('jsfjkdfksdlfsld')); // containNumbers: 'should contain at least one number'

const validator2 = new PasswordValidator();
console.log(validator2.validate('qwertya3sdf'))


const validator3 = new PasswordValidator({ minLength: 0, containNumbers: null });
console.log(validator3.validate(''));

