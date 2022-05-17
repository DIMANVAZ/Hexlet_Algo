/*
Реализуйте абстракцию (набор функций) для работы с прямоугольником, стороны которого всегда параллельны осям.
Прямоугольник может располагаться в любом месте координатной плоскости.

При такой постановке задачи достаточно знать только три параметра для однозначного задания прямоугольника на плоскости:
координаты левой-верхней точки, ширину и высоту.
Зная их, мы всегда можем построить прямоугольник одним единственным способом.

      |
    4 |    точка   ширина
      |       *-------------
    3 |       |            |
      |       |            | высота
    2 |       |            |
      |       --------------
    1 |
      |
------|---------------------------
    0 |  1   2   3   4   5   6   7
      |
      |
      |

Основной интерфейс:

makeRectangle() (конструктор) - создаёт прямоугольник. Принимает параметры: левую-верхнюю точку, ширину и высоту.
Селекторы getStartPoint(), getWidth() и getHeight()
Вспомогательные функции для выполнения расчетов:

square() - возвращает площадь прямоугольника (a * b).
perimeter() - возвращает периметр прямоугольника (2 * (a + b)).
containsTheOrigin() - проверяет, принадлежит ли центр координат прямоугольнику (не лежит на границе прямоугольника, а находится внутри).
Чтобы в этом убедиться, достаточно проверить, что все вершины прямоугольника лежат в разных квадрантах (их можно вычислить в момент проверки).

*/

// Создание прямоугольника:
// p - левая верхняя точка
// 5 - ширина
// 4 - высота
//
// p    5
// -----------
// |         |
// |         | 4
// |         |
// -----------

import {getX, getY, makePoint} from "@hexlet/points";
import {car, cdr, cons} from "@hexlet/pairs";

export function makeRectangle(topLeftPoint, width, height){
    return cons(topLeftPoint, cons(width,height));
}
export function getStartPoint(rectangle){
    return car(rectangle);
}
export function getWidth(rectangle){
    return car(cdr(rectangle));
}
export function getHeight(rectangle){
    return cdr(cdr(rectangle));
}
export function square(rectangle){
    return getHeight(rectangle)*getWidth(rectangle);
}
export function perimeter(rectangle){
    return 2*getHeight(rectangle) + 2*getWidth(rectangle);
}
export function containsTheOrigin(rectangle){
    const startPoint = getStartPoint(rectangle);
    let oppositePoint = getOppositePoint(rectangle);

    if(!getQuadrant(startPoint)){
        return false;
    }
    //противоположная по диагонали точка должна располагаться в двух квадрантах от стартовой (модуль = 2):
    return Math.abs(getQuadrant(startPoint) - getQuadrant(oppositePoint))  === 2;
}

function getQuadrant(point){
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

function getOppositePoint(rectangle){
    const startPoint = getStartPoint(rectangle);
    const startX = getX(startPoint);
    const startY = getY(startPoint);

    const width = getWidth(rectangle);
    const height = getHeight(rectangle);

    const oppoX = startX + width;
    const oppoY = startY - height;

    return makePoint(oppoX, oppoY);
}


const p = makePoint(0, 1);
const rectangle = makeRectangle(p, 5, 4);
const oppo = getOppositePoint(rectangle);
console.log(getX(oppo),';', getY(oppo));
console.log(containsTheOrigin(rectangle),'\n','------------------------'); // false


// Вычисление площади прямоугольника
// console.log(square(rectangle)); // 20;
// console.log(perimeter(rectangle)); // 18


const rectangle02 = makeRectangle(makePoint(-4, 3), 5, 4);
const oppo2 = getOppositePoint(rectangle02);
console.log(getX(oppo2),';', getY(oppo2));
console.log(containsTheOrigin(rectangle02),'\n','------------------------'); // true

const rec3 = makeRectangle(makePoint(-4, 4), 5, 2);
const oppo3 = getOppositePoint(rec3);
console.log(getX(oppo3),';', getY(oppo3));
console.log(containsTheOrigin(rec3),'\n','------------------------'); // false

const rec4 = makeRectangle(makePoint(-4, 3), 2, 8);
const oppo4 = getOppositePoint(rec4);
console.log(getX(oppo4),';', getY(oppo4));
console.log(containsTheOrigin(rec4),'\n','------------------------'); // false