function compare(obj1, obj2){
    let res=0;
    Object.keys(obj1).forEach(key => {
        obj1[key] !== obj2[key] ? res++ : null;
    })
    return res<=0;
}
const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://code-basics.com' };

const company3 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company4 = { name: 'Hexlet', website: 'https://hexlet.io', state: 'published' };

console.log(compare(company1,company2));
console.log(compare(company3,company4));

const name = 'Hexlet';
const company = { name };
console.log(company); //{ name: 'Hexlet' }

function getDomainInfo(url){
    let scheme = 'http';

    if(url.startsWith('https')){
        scheme = 'https';
    }
    let name = url.split('://').pop();
    return {scheme, name};
}

console.log(getDomainInfo('yandex.ru'));
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }

console.log(getDomainInfo('https://hexlet.io'));
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }

console.log(getDomainInfo('http://google.com'));
// {
//   scheme: 'http',
//   name: 'google.com',
// }