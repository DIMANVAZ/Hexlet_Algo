// быстрая сортировка (по возрастанию)
function quickSort(items){
    if(items.length <= 1){
        console.log(`items <=1 : ${items}`)
        return items;
    } else {
        let less = [];
        let greater = [];

        const pivotIndex = Math.floor(items.length / 2);
        const pivotEl = items[pivotIndex];

        for (let i = 0; i < items.length; i++) {

            if(items[i] < pivotEl){
                less.push(items[i]);
            } else if (items[i] >= pivotEl && i !== pivotIndex){
                greater.push(items[i]);
            }
        }
        let temp = [...quickSort(less), pivotEl, ...quickSort(greater)];
        console.log(`temp = ${temp}, pivot = ${pivotEl}`);
        return temp;
        //return [...quickSort(less), pivotEl, ...quickSort(greater)];
    }
}

// быстрая сортировка с указателем направления
function quickSort2(items, direction = 'asc'){
    let less = [];
    let greater = [];

    const pivotIndex = Math.floor(items.length / 2);
    const pivotEl = items[pivotIndex];

    if(items.length <= 1){
        return [...items]
    } else {
        for (let i = 0; i < items.length; i++) {
            if(items[i] < pivotEl){
                less.push(items[i]);
            } else if (items[i] >= pivotEl && i !== pivotIndex){
                greater.push(items[i]);
            }
        }
        if(direction === 'desc'){
            return [...quickSort(less), pivotEl, ...quickSort(greater)].reverse();
            // проработать вариант упрощения реверса, замены
        }
        return [...quickSort(less), pivotEl, ...quickSort(greater)]
    }

}

const items = [10, 20, - 13, 0, -1, 7, 0, -10, 5, 9, 4, -6, 13, -19];

console.log(quickSort(items)); // [-19, -13, -10, -6, -1, 0, 0, 4, 5, 7, 9, 10, 13, 20]
//console.log(quickSort([])); // []
//console.log(quickSort(items, 'desc')); // [20, 13, 10, 9, 7, 5, 4, 0, 0, -1, -6, -10, -13, -19]


