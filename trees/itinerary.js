/* Реализуйте и экспортируйте по умолчанию функцию, которая выстраивает маршрут между городами.

https://ru.hexlet.io/challenges/js_trees_itinerary_exercise/instance

Функция принимает 3 аргумента: дерево городов, город старта, город окончания маршрута
и возвращает массив городов, выстроенный в том же порядке,
в котором они находятся на пути следования по маршруту.

люди делают матрицы смежности((
а 1 предложил создавать просто 2 маршрута от Мск до нужных городов и потом убирать общие элементы, кроме последнего
а я думал убирать ненужные листы и тогда останется массив,в котором будет 2 тупика. Дальше - делать, как 1 выше   */
import _ from 'lodash';

export function itinerary(tree, start, finish){
    // если элемент - лист и не равен start/finish => удаляем его
    // если элемент лист и равен началу - суём его в массив, концу - тоже в массив -
    // нужен ближайший общий предок?? по итогу делаем 2 массива с самого начала, а потом сравниваем?

}

//определяет, лист ли перед нами
function isList(array){
    return array.length === 1;
}

//определяет, что перед нами ложный лист
function isFalseList(array,start){
    return array.length === 1 && array[0] !== start;
}

const tree = ['Moscow', [
    ['Smolensk'],
    ['Yaroslavl'],
    ['Voronezh', [
        ['Liski'],
        ['Boguchar'],
        ['Kursk', [
            ['Belgorod', [
                ['Borisovka'],
            ]],
            ['Kurchatov'],
        ]],
    ]],
    ['Ivanovo', [
        ['Kostroma'], ['Kineshma'],
    ]],
    ['Vladimir'],
    ['Tver', [
        ['Klin'], ['Dubna'], ['Rzhev'],
    ]],
]];

const tree3 = ['Moscow',
    ['Ivanovo', [
        ['Kostroma'],
    ]],
    ['Tver', [
        ['Dubna'],
    ]],
];

const tree4 = ['Moscow', [
    ['Voronezh', [
        ['Kursk', [
            ['Belgorod', [
                ['Borisovka'],
            ]],
            ['Kurchatov'],
        ]],
    ]],
]];


itinerary(tree, 'Dubna', 'Kostroma');
// ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

itinerary(tree, 'Borisovka', 'Kurchatov');
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']

