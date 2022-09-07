/*Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании и возвращает его.
Для создания компании обязательно только одно свойство – имя компании.
Остальные свойства добавляются только если они есть. Параметры:

    * Имя
    * Объект с дополнительными свойствами
Также у компаний есть два свойства со значениями по умолчанию:

    * state – moderating
    * createdAt – текущая дата (в формате Unix-времени.
Это число - количество миллисекунд, прошедших с полуночи 1 января 1970 года) */

export default function make(name, paramsObject){
    return {name, state: 'moderating', createdAt:Date.now(), ...paramsObject};
}

const company = make('Hexlet');
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }
console.log(company);

const company2 = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }
console.log(company2);