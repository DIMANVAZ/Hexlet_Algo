/*  Реализуйте и экспортируйте по умолчанию функцию-конструктор Segment с двумя свойствами beginPoint и endPoint
и геттеры для извлечения этих свойств: getBeginPoint и getEndPoint.*/

export default function Segment(beginPoint,endPoint){
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    this.getBeginPoint = function(){
        return this.beginPoint;
    };
    this.getEndPoint = function(){
        return this.endPoint;
    };
}