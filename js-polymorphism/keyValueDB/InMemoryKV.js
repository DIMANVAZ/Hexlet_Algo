import _ from 'lodash';

/*Реализуйте и экспортируйте по умолчанию класс InMemoryKV, который представляет собой in-memory key-value хранилище.
Данные внутри него хранятся в обычном объекте. Интерфейс этого класса совпадает с FileKV за исключением конструктора.
Конструктор InMemoryKV принимает на вход объект, который становится начальным значением базы данных.*/

export default class InMemoryKV {
    constructor(headObject = {}) {
        this.db = _.cloneDeep(headObject);
    }

    set(key, value) {
        this.db[key] = value;
    }

    unset(key) {
        delete this.db[key];
    }

    get(key, defaultValue = null) {
        return _.get(this.db, key, defaultValue);
    }

    toObject() {
        return _.cloneDeep(this.db);
    }
}

const map = new InMemoryKV({ key: 10 });
map.get('key'); // 10