//Допишите конструктор пользователя, так, чтобы внутри устанавливалась реальная подписка если она передана снаружи
// и создавалась фейковая в ином случае.

import FakeSubscription from './FakeSubscription.js';

class User {
    constructor(email, currentSubscription = null) { // currentSubs может быть null/professional/profi
        this.email = email;
        // BEGIN (write your solution here)
        if(currentSubscription){
            this.currentSubscription = currentSubscription;
        } else {
            this.currentSubscription = new FakeSubscription(this);
        }
        // END
    }

    getCurrentSubscription() {
        return this.currentSubscription;
    }

    isAdmin() {
        return this.email === 'rakhim@hexlet.io'; // вернёт true, если переданный юзер = админ
    }
}

export default User;