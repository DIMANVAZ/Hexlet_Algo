/*Реализуйте абстракцию (набор функций) для работы с прямоугольниками, стороны которого всегда параллельны осям.
Прямоугольник может располагаться в любом месте координатной плоскости.

При такой постановке, достаточно знать только три параметра для однозначного задания прямоугольника на плоскости:
координаты левой верхней точки, ширину и высоту.
Зная их, мы всегда можем построить прямоугольник одним единственным способом.

Основной интерфейс:

makeRectangle(point, width, height) (конструктор) – создает прямоугольник.
Принимает параметры: левую-верхнюю точку, ширину и высоту. Ширина и высота – положительные числа.

Селекторы getStartPoint(rectangle), getWidth(rectangle) и getHeight(rectangle)

containsOrigin(rectangle) – проверяет, принадлежит ли центр координат прямоугольнику
(не лежит на границе прямоугольника, а находится внутри).
Чтобы в этом убедиться, достаточно проверить, что все вершины прямоугольника лежат в разных квадрантах
(их можно высчитать в момент проверки).

Экспортируйте функции makeRectangle(point, width, height) и containsOrigin(rectangle).
*/

import {makeDecartPoint, getX, getY, getQuadrant} from './points.js';

export function makeRectangle(point, width, height){
    return {startPoint:point, width, height}
}

function getStartPoint(rectangle){
    return rectangle.startPoint;
}
function getWidth(rectangle){
    return rectangle.width;
}
function getHeight(rectangle){
    return rectangle.height;
}

function getOppositePoint(rectangle){
    const startPoint = getStartPoint(rectangle);
    const startX = getX(startPoint);
    const startY = getY(startPoint);

    const width = getWidth(rectangle);
    const height = getHeight(rectangle);

    const oppoX = startX + width;
    const oppoY = startY - height;

    return makeDecartPoint(oppoX, oppoY);
}

export function containsOrigin(rectangle){
    const startPoint = getStartPoint(rectangle);
    let oppositePoint = getOppositePoint(rectangle);

    if(!getQuadrant(startPoint) || !getQuadrant(oppositePoint)){
        return false;
    }
    //противоположная по диагонали точка должна располагаться в двух квадрантах от стартовой (модуль = 2):
    return Math.abs(getQuadrant(startPoint) - getQuadrant(oppositePoint))  === 2;
}

// Создание прямоугольника:
// p - левая верхняя точка
// 4 - ширина
// 5 - высота
//
// p    4
// -----------
// |         |
// |         | 5
// |         |
// -----------
// 'rectangle1'
const p = makeDecartPoint(0, 1);
const rectangle = makeRectangle(p, 4, 5);
console.log(containsOrigin(rectangle)); //false

// 'rectangle2'
const p2 = makeDecartPoint(-4, 3);
const rectangle1 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
console.log(containsOrigin(rectangle1)); // true

const rectangle2 = makeRectangle(p2, 2, 2);
console.log(containsOrigin(rectangle2));//false

const rectangle3 = makeRectangle(p2, 2, 4);
console.log(containsOrigin(rectangle3));//false

const rectangle4 = makeRectangle(p2, 4, 3);
console.log(getOppositePoint(rectangle4))
console.log(containsOrigin(rectangle4));//false

const rectangle5 = makeRectangle(p2, 5, 2);
console.log(containsOrigin(rectangle5));//false