/*Реализуйте и экспортируйте по умолчанию функцию, которая находит точку посередине между двумя указанными точками.*/

export default function getMidpoint(point1, point2){
    const {x:x1,y:y1} = point1;
    const {x:x2,y:y2} = point2;

    return {
        x: ((x1 + x2) / 2),
        y: ((y1 + y2) / 2)
    };
}

const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };
const point3 = getMidpoint(point1, point2);
console.log(point3); // => { x: 2, y: 2 };
