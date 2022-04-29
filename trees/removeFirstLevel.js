//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход дерево, и возвращает новое,
//элементами которого являются дети вложенных узлов (см. пример).

/*
const tree1 = [[5], 1, [3, 4]];
Второй уровень тут: 5, 3, 4
removeFirstLevel(tree1); // [5, 3, 4]

const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
removeFirstLevel(tree2);
[3, 5, [4, 3], 2]
*/

const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
const tree1 = [[5], 1, [3, 4]];

function removeFirstLevel(tree){
 let javap = [];
 tree.forEach(el => {
     if (Array.isArray(el)){
         javap.push(el)
     }
 })
    return javap.flat(1);
}

console.log(removeFirstLevel(tree2));

