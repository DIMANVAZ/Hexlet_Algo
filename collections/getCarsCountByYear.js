/*  Реализуйте и экспортируйте по умолчанию функцию,
которая принимает на вход
    список машин (в виде обычного js массива с объектами),

а возвращает объект, в котором
    свойство - это год выпуска, а
    значение - это количество машин для соответствующего года.

Порядок свойств в результирующем объекте не важен.

Решите эту задачу, используя итеративный процесс. Он хорош тем, что позволяет задействовать сразу все, что нужно.

Вам понадобятся:

const [first, ...rest] = arr
const { propertyName } = obj
{ ...acc, [propertyName]: value }   */

export default function getCarsCountByYear(arrayOfObj){
    function adder(acc, elem){
        const {year} = elem;
        acc[year] ? acc[year] += 1 : acc[year] = 1;
        return acc;
    }
    return arrayOfObj.reduce(adder, {})
}


const cars = [
    { brand: 'bmw', model: 'm5', year: 2014 },
    { brand: 'bmw', model: 'm4', year: 2013 },
    { brand: 'kia', model: 'sorento', year: 2014 },
    { brand: 'kia', model: 'rio', year: 2010 },
    { brand: 'kia', model: 'sportage', year: 2012 },
];

console.log(getCarsCountByYear(cars));
//  {
//    2010: 1,
//    2012: 1,
//    2013: 1,
//    2014: 2,
//  };