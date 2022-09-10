/*  Реализуйте и экспортируйте функцию getMutualFriends(), которая принимает на вход двух пользователей
и возвращает массив состоящий из общих друзей этих пользователей.

Интерфейс абстракции "Пользователь":
    user.id – возвращает идентификатор пользователя, по которому можно его отличить от остальных.
    user.getFriends() – возвращает список друзей (то есть пользователей).   */

import makeUser from './user.js';
function getMutualFriends(user1,user2){
    const friends1 = user1.getFriends();
    const friends2 = user2.getFriends();
    const common = [];
    friends1.forEach(friend1 => {
        friends2.forEach(friend2 => {
            if(friend1.id === friend2.id){
                common.push(friend1);
            }
        })
    })
    return common;
}

const user1 = makeUser({
    friends: [
        makeUser({ id: 1 }),
        makeUser({ id: 2 }), // общий друг
    ],
});

const user2 = makeUser({
    friends: [
        makeUser({ id: 2 }), // общий друг
        makeUser({ id: 3 }),
    ],
});

getMutualFriends(user1, user2); // [ { friends: [], id: 2, getFriends: [Function: getFriends] } ]

console.log(getMutualFriends(user1, user2))