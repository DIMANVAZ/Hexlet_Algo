// @ts-check

import fs from 'fs';
import _ from 'lodash';

class FileKV {
    constructor(filePath, initial = {}) {
        this.filePath = filePath;
        Object.entries(initial)
            .forEach(([key, value]) => this.set(key, value));
    }

    set(key, value) {
        const content = fs.readFileSync(this.filePath);
        const data = JSON.parse(content);
        const updatedData = { ...data, [key]: value };
        fs.writeFileSync(this.filePath, JSON.stringify(updatedData));
    }

    unset(key) {
        const content = fs.readFileSync(this.filePath);
        const data = JSON.parse(content);
        const updatedData = _.omit(data, key);
        fs.writeFileSync(this.filePath, JSON.stringify(updatedData));
    }

    get(key, defaultValue = null) {
        const content = fs.readFileSync(this.filePath);
        const data = JSON.parse(content);
        return _.get(data, key, defaultValue);
    }

    toObject() {
        const content = fs.readFileSync(this.filePath);
        return JSON.parse(content);
    }
}

export default FileKV;

const map = new FileKV('/path/to/dbfile');
// Получение значения по ключу
map.get('key'); // 'value'
map.get('unknownkey'); // null
// Получение значения и дефолт
map.get('unknownkey', 'default value'); // 'default value'
// Установка и обновление ключа
map.set('key2', 'value2');
map.get('key2'); // 'value2'
// Удаление ключа
map.unset('key2');
map.get('key2'); // null
map.set('key', 'value');
// Возврат всех данных из базы(возвращается новый объект)
map.toObject(); // { key: 'value' }
