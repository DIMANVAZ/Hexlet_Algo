/*
Рассмотрим задачу представления отрезков на прямой плоскости. Каждый отрезок представляется как пара точек: начало и конец.
Он может быть описан, например, так: [(1, 3), (5, 4)].
Это означает, что наш отрезок начинается в точке (1, 3) и заканчивается в точке (5, 4) координатной плоскости.

Определите и экспортируйте следующие функции:

Конструктор makeSegment(), который принимает на вход две точки и возвращает отрезок. Первая точка это начало отрезка, вторая это конец.
Селекторы startSegment() и endSegment(), которые извлекают из отрезка его начальную и конечную точку соответственно.
Вспомогательную функцию segmentToString(), которая возвращает текстовое представление отрезка: [(1, 2), (-4, -2)].
Функцию midpointSegment(), которая находит точку на середине отрезка по формулaм: x = (x1 + x2) / 2 и y = (y1 + y2) / 2.
*/

import { makePoint, getX, getY, toString as pointToString } from '@hexlet/points';
import {car, cdr, cons} from "@hexlet/pairs";

export function makeSegment(point1, point2) {
    //return [point1,point2];
    return cons(point1, point2)
}

export function startSegment(segment){
    // return segment[0];
    return car(segment)
}

export function endSegment(segment){
    // return segment[1];
    return cdr(segment)
}

export function midpointSegment(segment){
    const x1 = getX(car(segment)); // getX(segment[0])
    const y1 = getY(car(segment)); // getY(segment[0]);
    const x2 = getX(cdr(segment)); // getX(segment[1])
    const y2 = getY(cdr(segment)); // getY(segment[1]);
    return makePoint((x1 + x2) / 2, (y1 + y2) / 2)
}

export function segmentToString(segment){
    return `[${pointToString(car(segment))}, ${pointToString(cdr(segment))}]`

}

// не важно, чем является segment с точки зрения реализации, главное, что с ним можно
// работать используя функции для работы с отрезками
const segment = makeSegment(makePoint(1, 2), makePoint(-4, -2));
console.log(segmentToString(segment)); // [(1, 2), (-4, -2)]

const point1 = startSegment(segment);
console.log(pointToString(point1)); // (1, 2)

const point2 = endSegment(segment);
console.log(pointToString(point2)); // (-4, -2)

console.log(pointToString(startSegment(segment)) === pointToString(makePoint(1, 2))); // true

console.log(pointToString(midpointSegment(segment))); // (-1.5, 0)