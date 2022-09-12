/*Реализуйте и экспортируйте по умолчанию класс для работы с HTTP-адресом. Класс должен содержать конструктор и методы:

конструктор — принимает на вход HTTP-адрес в виде строки
getScheme() — возвращает протокол передачи данных (без двоеточия)
getHostName() — возвращает имя хоста
getQueryParams() — возвращает параметры запроса в виде пар ключ-значение объекта
getQueryParam() — получает значение параметра запроса по имени.
    Если параметр с переданным именем не существует, метод возвращает значение заданное вторым параметром (по умолчанию равно null)
equals(url) — принимает объект класса Url и возвращает результат сравнения с текущим объектом — true или false  */

export default class Url{
    constructor(urlString) {
        this.urlString = new URL(urlString);
        this.href = urlString;
    }

    getScheme(){ //— возвращает протокол передачи данных (без двоеточия)
        return this.urlString.protocol.slice(0,-1);
    }

    getHostName(){ // — возвращает имя хоста
        return this.urlString.hostname;
    }

    getQueryParams(){ //возвращает параметры запроса в виде пар ключ-значение объекта
        return Object.fromEntries(this.urlString.searchParams.entries());
    }

    getQueryParam(param, def = null){ //получает значение параметра запроса по имени.
        if (!Object.hasOwn(this.getQueryParams(),param)){
            return def;
        }
        return this.getQueryParams()[param];
    }

    equals(newUrlObj){ //— принимает объект класса Url и возвращает результат сравнения с текущим объектом — true или false
        return this.href === newUrlObj.href;
    }
}


const url = new Url('http://yandex.ru:80?key=value&key2=value2');
console.log(url.getScheme()); // 'http'
console.log(url.getHostName()); // 'yandex.ru'
console.log(url.getQueryParams());
// {
//   key: 'value',
//   key2: 'value2',
// };
console.log(url.getQueryParam('key')); // 'value'
// второй параметр - значение по умолчанию
console.log(url.getQueryParam('key2', 'lala')); // 'value2'
console.log(url.getQueryParam('new', 'ehu')); // 'ehu'
console.log(url.getQueryParam('new')); // null
console.log(url.equals(new Url('http://yandex.ru:80?key=value&key2=value2'))); // true
console.log(url.equals(new Url('http://yandex.ru:80?key=value'))); // false


