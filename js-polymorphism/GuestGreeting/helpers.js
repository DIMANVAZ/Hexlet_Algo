/*Реализуйте и экспортируйте по умолчанию функцию, которая возвращает приветствие для пользователя.
Это приветствие показывается пользователю на сайте.
Если пользователь гость, то выводится "Nice to meet you Guest!",
если не гость, то "Hello <Имя>!", где "<Имя>" это имя реального пользователя.   */
import Guest from './Guest.js';
import User from './User.js';

export default function getGreeting(visitor){
    return visitor.isGuest() ? 'Nice to meet you Guest!' :`Hello ${visitor.getName()}!`;
}

const guest = new Guest();
getGreeting(guest); // 'Nice to meet you Guest!'

const user = new User('Petr');
getGreeting(user); // 'Hello Petr!'