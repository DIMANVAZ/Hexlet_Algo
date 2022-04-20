// Задача о рюкзаке - дано множество предметов с весом и стоимостью,
// необходимо набить рюкзак максимальной стоимостью, вес рюкзака ограничен.
// ...а каждый предмет только один!!
// Реализуйте и экспортируйте по умолчанию функцию, которая находит максимальную стоимость рюкзака,
// используйте динамическое программирование.
function knapsack(items, capacity){
    let soByCo = [...items].sort((a,b)=> b.cost-a.cost);

    let table = [];
    table.push(['вещь \\ вместимость']);
    for (let i = 1; i <= capacity; i++) {
        table[0].push(i);
    }

    for (let y = 0; y < soByCo.length; y++) { // каждый элемент массива items 0-1-2-3
        let row = new Array(capacity); // пустой массив для строки вещи
        row[0] = soByCo[y].name; // вбиваем туда имя
        for (let x = 1; x <= capacity; x++) { // гоним вдоль вместимости рюкзака 1-2-3-...-9

        }
        table.push(row);
    }
    console.table(table);
}

const items = [
    { name: 'porridge', weight: 6, cost: 30 },
    { name: 'headphones', weight: 1, cost: 20 },
    { name: 'book', weight: 4, cost: 20 },
    { name: 'phone', weight: 3, cost: 15 },
];

const items2 = [
    { name: 'backpack', weight: 60, cost: 300 },
    { name: 'headphones', weight: 10, cost: 200 },
    { name: 'phone', weight: 30, cost: 150 },
    { name: 'book', weight: 40, cost: 200 },
];
knapsack(items, 9); // 55
