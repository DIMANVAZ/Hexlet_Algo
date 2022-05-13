/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и
заменяет во всех узлах имя класса, имена классов передаются через параметры.
Функция не должна мутировать исходное дерево.
*/
import cloneDeep from 'lodash/cloneDeep.js'

const tree = {
    name: 'div',
    type: 'tag-internal',
    className: 'hexlet-community',
    children: [
        {
            name: 'div',
            type: 'tag-internal',
            className: 'old-class',
            children: [],
        },
        {
            name: 'div',
            type: 'tag-internal',
            className: 'old-class',
            children: [],
        },
    ],
};
export default function changeClass(tree, oldClass, newClass){
    const treeCopy = cloneDeep(tree);
    function changer(tree){
        if(tree.className === oldClass){
            tree.className = newClass;
        }
        if (tree.children?.length){
            tree.children.forEach(child => changer(child, oldClass, newClass))
        }
    }
    changer(treeCopy)
    return treeCopy;
}

const result = changeClass(tree, 'old-class', 'new-class');
console.log(result);
// Результат:
// {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//   ],
// }
