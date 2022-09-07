const company = {
    name: null,
    state: 'moderating',
};

const data = {
    name: 'Hexlet',
    state: 'published',
};

export default function fill(target, keys, source){
    if(!keys.length){
        return Object.assign(target, source);
    }
    keys.forEach(key => {
        target[key] = source[key];
    })
    return target;
}
// Вызовы ниже нужно рассматривать как независимые

console.log(fill(company, [], data));
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

console.log(Object.fromEntries([['a',1],['b',2]]));



//fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }

