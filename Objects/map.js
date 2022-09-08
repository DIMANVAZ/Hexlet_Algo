/*  Реализуйте и экспортируйте набор функций, для работы со словарём, построенным на хеш-таблице.
Для простоты, наша реализация не поддерживает разрешение коллизий.

По сути в этом задании надо реализовать объекты.
По понятным причинам использовать объекты для создания объектов нельзя. Представьте что в языке объектов нет и мы их хотим добавить.

    make() — создаёт новый словарь
    set(map, key, value) — устанавливает в словарь значение по ключу. Работает и для создания и для изменения.
        Функция возвращает true, если удалось установить значение.
        При возникновении коллизии, функция никак не меняет словарь и возвращает false
    get(map, key, defaultValue = null) — возвращает значение указанного ключа.
        Параметр defaultValue — значение, которое функция возвращает, если в словаре нет ключа (по умолчанию равно null).
При возникновении коллизии функция также возвращает значение по умолчанию
Функции set() и get() принимают первым параметром словарь.
Передача идёт по ссылке, поэтому set() может изменить его напрямую.

Для внутреннего представления словаря, используйте массив, где индекс содержит хеш записи, а значение — key и value (их можно упаковать в массив).
Коллизии возникают, когда хеш одинаковый, а ключи разные.
Документация crc-32
*/
import crc32 from 'crc-32';

export function make(){
    return [];
}

export function set(map, key, value){
    const keyHash = Math.abs(crc32.str(key)) % 1000;
    // проверка на коллизию: коллизия - это когда хеш один, а ключи разные
    if(map[keyHash]){
        if(map[keyHash][0] !== key){
            return false;
        }
    }
    // конец проверки на коллизию
    map[keyHash] = [key,value];
    return true;
}

export function get(map, key, defaultValue = null){
    const keyHash = Math.abs(crc32.str(key)) % 1000;
    // проверка на коллизию: коллизия - это когда хеш один, а ключи разные
    if(map[keyHash]){
        if(map[keyHash][0] !== key){
            return defaultValue;
        }
        return map[keyHash][1]
    }
    // конец проверки на коллизию
    return defaultValue;
}

const map2 = make();

set(map2, 'aaaaa0.462031558722291', 'vvv'); //truthy;
set(map2, 'aaaaa0.0585754039730588', 'boom!'); //falsy;

const result1 = get(map2, 'aaaaa0.462031558722291');
console.log(result1); //.toBe('vvv');

const result2 = get(map2, 'aaaaa0.0585754039730588');
console.log(result2); //.toBeNull();

set(map2, 'aaaaa0.462031558722291', 'wop');
const result3 = get(map2, 'aaaaa0.462031558722291');
console.log(result3);//.toBe('wop');


// const map = make();
// let result = get(map, 'key');
// console.log(result); // => null
//
// result = get(map, 'key', 'default_value');
// console.log(result); // => "default_value"
//
// set(map, 'key2', 'value2');
// result = get(map, 'key2');
// console.log(result); // => "value2"
