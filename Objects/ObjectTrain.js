import _ from 'lodash';

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
console.log(getDomainInfo('https://hexlet.io'));
console.log(getDomainInfo('http://google.com'));

export default function countWords(sentence){
    const words = _.words(sentence).map(el => el.toLowerCase());
    const reply = {};
    words.forEach(word => {
        if(Object.hasOwn(reply,word)){
            reply[word] ++;
        } else reply[word] = 1;
    })
    return reply;
}
console.log(countWords('one two three two ONE one wow'));

function pick(object, propsArray){
    const res = {};
    propsArray.forEach(el => {
        if(Object.hasOwn(object,el)){
            res[el] = object[el];
        }
    })
    return res;
}

const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};

console.log(pick(data, ['user'])); // { user: 'ubuntu' }
console.log(pick(data, ['user', 'os'])); // { user: 'ubuntu', os: 'linux' }
console.log(pick(data, [])); // {}
// Если такого свойства нет в исходных данных,
// то оно игнорируется
console.log(pick(data, ['none', 'cores'])); // { cores: 4 }

//-------------------------------------------------------------------



