/*  Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список емейлов,
а возвращает количество емейлов, расположенных на каждом бесплатном домене.
Список бесплатных доменов хранится в константе freeEmailDomains.    */

const freeEmailDomains = [
    'gmail.com',
    'yandex.ru',
    'hotmail.com',
    'yahoo.com',
];

const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
];
export default function getFreeDomainsCount(emails){
    const res = emails.reduce((object,address) => {
        const domain = address.split('@')[1];
        if(freeEmailDomains.includes(domain)){
            object[domain] ? object[domain]++ : object[domain] = 1;
        }
        return object;
    },{})
    return res;
}

console.log(getFreeDomainsCount(emails));
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
