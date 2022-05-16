/*
getQuadrant() — функция, которая вычисляет квадрант, в котором находится точка. Ниже приведена схема,
показывающая номера квадрантов на плоскости.
        +
      2 | 1
        |
+----------------+
        |
      3 | 4
        +
Если точка не принадлежит ни одному квадранту (т.е., если она лежит хотя бы на одной из осей координат), то функция должна возвращать null.

getSymmetricalPoint() — функция, возвращающая новую точку, симметричную относительно начала координат.
Такая симметричность означает, что меняются знаки у x и y.

calculateDistance() — функция, вычисляющая расстояние между точками по формуле: d = sqrt((x2−x1)^2+(y2−y1)^2)
* */

import {getX, getY, makePoint} from "@hexlet/points";

export function getQuadrant(point){
    let x = getX(point);
    let y = getY(point);

    switch (true) {
        case x>0 && y>0:return 1;
        case x<0 && y<0:return 3;
        case x<0 && y>0:return 2;
        case x>0 && y<0:return 4;
        default:return null;
    }
}
export function getSymmetricalPoint(point){
    let x = getX(point);
    let y = getY(point);
    return makePoint(-x,-y);
}
export function calculateDistance(point1,point2){
    let x1 = getX(point1);
    let y1 = getY(point1);
    let x2 = getX(point2);
    let y2 = getY(point2);
    return Math.sqrt((x2-x1)**2 + (y2-y1)**2);
}

const point = makePoint(1, 5);
console.log(getQuadrant(point)); // 1
console.log(getQuadrant(makePoint(3, -3))); // 4

const point2 = makePoint(0, 7);
console.log(getQuadrant(point2)); // null
console.log(getQuadrant(makePoint(2, 0))); // null

let symm = getSymmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)
console.log(getX(symm),getY(symm));

console.log(calculateDistance(makePoint(-2, -3), makePoint(-4, 4))); // ≈ 7.28
