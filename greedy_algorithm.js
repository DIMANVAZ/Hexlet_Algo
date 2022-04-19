// жадный алгоритм
// Задача о рюкзаке - дано множество предметов с весом и стоимостью,
// необходимо набить рюкзак максимальной стоимостью, вес рюкзака ограничен.
// Жадный алгоритм в первую очередь выбирает предмет с максимальной стоимостью и кладёт в рюкзак.
function knapsack(items, capacity){
    const final = [];
    items.sort((a,b)=> b.cost-a.cost);
    for (let i = 0; i < items.length; i++) {
        if(items[i].weight <= capacity) {
            final.push(items[i].name);
            capacity -= items[i].weight;
        }
    }
    return final.sort(); // по алфавиту
}

const items = [
    { name: 'pack', weight: 30, cost: 30 },
    { name: 'phone', weight: 33, cost: 25 },
    { name: 'book', weight: 20, cost: 22 },
    { name: 'auto', weight: 10, cost: 20 },
    { name: 'pony', weight: 8, cost: 17 },
    { name: 'horse', weight: 15, cost: 15 },
    { name: 'toy', weight: 5, cost: 12 },
];

console.log(knapsack(items, 35)); //['pack','toy']
console.log(knapsack(items, 68)); //['pack','phone','toy']
console.log(knapsack(items, 121)); //['auto','book','horse','pack','phone','pony','toy']
console.log(knapsack(items,29)); //[ 'book', 'pony' ]
console.log(knapsack(items,19)); //[ 'auto', 'pony' ]
console.log(knapsack(items,6)); //[ 'toy' ]