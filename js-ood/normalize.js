/*   Реализуйте и экспортируйте по умолчанию функцию normalize() которая принимает на вход список городов и стран,
нормализует их имена, сортирует города и группирует их по стране.
Получить только уникальные значения можно через специальный объект Set */

export default function normalize(locations){
    const raw =  locations
        .map(function ({name, country}) {
            return {
                name: name.toLowerCase().trim(),
                country: country.toLowerCase().trim()
            };
        })
        .sort(function (place1, place2) {
            return place1.country > place2.country ? 1 : -1;
        })
        .reduce(function (acc, val) {
            if (Object.hasOwn(acc, val.country)) {
                   acc[val.country].add(val.name);
            } else acc[val.country] = new Set([val.name]);
            return acc;
        }, {});
        console.log(raw);
        for(let key in raw){
            raw[key] = [...raw[key].values()].sort(function(a,b){ return a > b ? 1 : -1});
        }
        return raw;
}

const countries = [
    { name: 'Miami', country: 'usa' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Moscow ', country: ' Russia' },
];

const countries2 = [
    { name: 'istanbul', country: 'turkey' },
    { name: 'Moscow ', country: ' Russia' },
    { name: 'iStanbul', country: 'tUrkey' },
    { name: 'antalia', country: 'turkeY ' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Miami', country: 'usa' },
];

console.log(normalize(countries));
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }

console.log(normalize(countries2));
// russia: [
//     'moscow',
//     'samara',
// ],
//     turkey: [
//     'antalia',
//     'istanbul',
// ],
//     usa: [
//     'miami',
// ],