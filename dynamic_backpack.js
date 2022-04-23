// Задача о рюкзаке - дано множество предметов с весом и стоимостью,
// необходимо набить рюкзак максимальной стоимостью, вес рюкзака ограничен.
// ...а каждый предмет только один!!
// Реализуйте и экспортируйте по умолчанию функцию, которая находит максимальную стоимость рюкзака,
// используйте динамическое программирование.
function knapsack(items, capacity){
    const n = items.length;
    const dp = new Array(n + 1).fill(0).map(() => new Array(capacity + 1).fill(0));

    // делает массив из n+1 массивов, каждый из которых длиной capacity+1
    // получается матрица n+1 по высоте, capacity+1 по ширине
    // нулевой столбец делают - как я понял - просто чтобы не заморачиваться, т.к. считать вместимость всё равно с 1

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (items[i - 1].weight <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - items[i - 1].weight] + items[i - 1].cost);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    console.table(dp);
    return dp[n][capacity];
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

console.log(knapsack(myItems, 6));
console.log(knapsack(items, 9));
console.log(knapsack(items2, 6));