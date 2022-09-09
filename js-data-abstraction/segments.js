/*Реализуйте и экспортируйте указанные ниже функции:
    makeSegment(). Принимает на вход две точки и возвращает отрезок.
    getMidpointOfSegment(). Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
    getBeginPoint(). Принимает на вход отрезок и возвращает точку начала отрезка.
    getEndPoint(). Принимает на вход отрезок и возвращает точку конца отрезка.  */
import { makeDecartPoint, getX, getY } from './points.js';

const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
const segment = makeSegment(beginPoint, endPoint);

export function makeSegment(beginPoint, endPoint) {
    return {beginPoint,endPoint};
}

export function getMidpointOfSegment(segment){
    const x1 = getX(getBeginPoint(segment));
    const y1 = getY(getBeginPoint(segment));
    const x2 = getX(getEndPoint(segment));
    const y2 = getY(getEndPoint(segment));

    return makeDecartPoint((x1 + x2) / 2, (y1 + y2) / 2)
}
export function getBeginPoint(segment){
    return segment.beginPoint;
}
export function getEndPoint(segment){
    return segment.endPoint;
}

console.log(getMidpointOfSegment(segment)); // (1.5, 1)
console.log(getBeginPoint(segment)); // (3, 2)
console.log(getEndPoint(segment)); // (0, 0)