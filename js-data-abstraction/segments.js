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

}

export function getMidpointOfSegment(segment){

}
export function getBeginPoint(segment){

}
export function getEndPoint(segment){

}

getMidpointOfSegment(segment); // (1.5, 1)
getBeginPoint(segment); // (3, 2)
getEndPoint(segment); // (0, 0)