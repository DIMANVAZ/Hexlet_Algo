/*  JavaScript долгое время не поддерживал приватных свойств и методов.
Для них появилось соглашение об именовании с нижнего подчёркивания _,
чтобы предотвратить доступ ко внутренностям объекта в обход интерфейса.
Но сама возможность прямого доступа остаётся.
Нам предстоит разработать обёртку над объектом, защищающую его приватные свойства от прямого доступа.

Реализуйте и экспортируйте по умолчанию функцию, которая принимает объект и позволяет
обращаться только к "публичным" свойствам и методам.
При попытке прочитать или перезаписать приватное или несуществующее свойство, должно выбрасываться исключение.

В реализации используйте Proxy.

Чтобы избежать потери контекста для методов, используйте связывание через bind.
Определить, что по ключу возвращается метод можно через оператор typeof.
Можно пользоваться handler.set()    */

class Course {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }
}

export default function protect(target){
    const handlers = {
        get(target,prop){
            if(prop in target){
                console.log('p in t');
            } else throw new Error('нет такого свойства');
        },

        set(target, prop, value){
            console.log(prop[0])
            if(!(prop in target)){
                throw new Error('нет такого свойства');
            }


        }
    }
    return new Proxy(target, handlers);
}

const course = new Course('Object-oriented design');
const protectedCourse = protect(course);

console.log(course.getName()); // "Object-oriented design"
console.log(protectedCourse.getName()); // "Object-oriented design"
console.log(course._name); // "Object-oriented design"
console.log(course._nonExists); // undefined
console.log('----------------------------');
console.log(protectedCourse._name); // Error
console.log(protectedCourse._name = 'OOD'); // Error
console.log(protectedCourse._nonExists); // Error
