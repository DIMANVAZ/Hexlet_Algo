// Задача о рюкзаке - дано множество предметов с весом и стоимостью,
// необходимо набить рюкзак максимальной стоимостью, вес рюкзака ограничен.
// ...а каждый предмет только один!!
// Реализуйте и экспортируйте по умолчанию функцию, которая находит максимальную стоимость рюкзака,
// используйте динамическое программирование.
function knapsack(items, capacity){
    // let soByCo = [...items].sort((a,b)=> b.cost-a.cost);
    let table = [];
    for (let i = 0; i < items.length; i++) {
        table.push(new Array(capacity).fill(items[i].name));
    }

    // i - элементы входного массива (вещи) -> т.е. высота таблицы
    // j - capacity рюкзака, от 1 до n -> горизонталь
    // текущий элемент по горизонтали - это предыдущий максимум + свободный слот, заполненный по возможности

    for (let j = 1; j <= capacity; j++){
        for (let i = 0; i < items.length; i++) {
            if(j >= items[i].weight){
                table[i][j] = items[i].cost;
            } else {
                table[i][j] = 0
            }
        }
    }
    console.log(table);
    console.table(table)
}

const myItems = [
    { name: 'Кольцо', weight: 1, cost: 50 },
    { name: 'Зажигалка', weight: 2, cost: 30 },
    { name: 'Ключ', weight: 3, cost: 20 },
    { name: 'Болт', weight: 2, cost: 10 },
]


const items = [
    { name: 'porridge', weight: 6, cost: 30 },
    { name: 'headphones', weight: 1, cost: 20 },
    { name: 'book', weight: 4, cost: 20 },
    { name: 'phone', weight: 3, cost: 15 },
];

const items2 = [
    { name: 'backpack', weight: 6, cost: 30 },
    { name: 'headphones', weight: 1, cost: 20 },
    { name: 'book', weight: 4, cost: 20 },
    { name: 'phone', weight: 3, cost: 15 },
];

//knapsack(items, 9); // 55
//knapsack(items2, 6); // 40
knapsack(myItems, 6); // 40