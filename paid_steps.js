function tollStaircase(stairs){
    let i = stairs.length-1;
    let price = stairs[i] + stairs[0]; //сразу первая и последняя ступеньки
        while(true){
            if(i-2 <= 0){
                break
            }
            if(stairs[i-1] >= stairs[i-2]){ // если 2 ступеньки подряд имеют одинаковую цену, то прыгать лучше дальше
                price += stairs[i-2];
                i-=2;
            } else {
                price += stairs[i-1];
                i-=1;
            }
        }
    return price;
}

const stairs = [1, 13, 17, 2, 8, 7, 19, 6];
const stairs2 = [0, 0, 0, 0];
const stairs3 = [92, 92, 93, 92, 92, 92, 93, 93];

console.log(tollStaircase(stairs)); // 29
console.log(tollStaircase(stairs.reverse())); // 29
console.log(tollStaircase(stairs2)); // 0
console.log(tollStaircase(stairs3)); // 553 ?? 461