/*  Реализуйте и экспортируйте по умолчанию класс FakeSubscription.
В конструктор FakeSubscription принимает пользователя.
Если пользователь администратор user.isAdmin(), то все доступы разрешены, если нет – то запрещены.
Класс должен повторять интерфейс класса Subscription, то есть иметь те же методы, но со своей логикой.  */

export default class FakeSubscription {
    constructor(visitor) {
        this.visitor = visitor;
    }

    hasProfessionalAccess() {
        return this.visitor.isAdmin();
    }

    hasPremiumAccess() {
        return this.visitor.isAdmin();
    }
}

import Subscription from './Subscription.js';
import User from './User.js';

const user1 = new User('vasya@email.com', new Subscription('premium'));
console.log(user1.getCurrentSubscription().hasPremiumAccess()); // true
console.log(user1.getCurrentSubscription().hasProfessionalAccess()); // false

const user2 = new User('vasya@email.com', new Subscription('professional'));
console.log(user2.getCurrentSubscription().hasPremiumAccess()); // false
console.log(user2.getCurrentSubscription().hasProfessionalAccess()); // true

// Внутри создается фейковая, потому что подписка не передается
const user3 = new User('vasya@email.com');
console.log(user3.getCurrentSubscription().hasPremiumAccess()); // false
console.log(user3.getCurrentSubscription().hasProfessionalAccess()); // false

const user4 = new User('rakhim@hexlet.io'); // администратор, проверяется по емейлу
console.log(user4.getCurrentSubscription().hasPremiumAccess()); // true
console.log(user4.getCurrentSubscription().hasProfessionalAccess()); // true