/*  Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей
и возвращает плоский список подруг всех пользователей (без сохранения ключей).
Друзья каждого пользователя хранятся в виде массива в ключе friends.
Пол доступен по ключу gender и может принимать значения male или female. */

const users = [
    {
        name: 'Tirion',
        friends: [
            { name: 'Mira', gender: 'female' },
            { name: 'Ramsey', gender: 'male' },
        ],
    },
    { name: 'Bronn', friends: [] },
    {
        name: 'Sam',
        friends: [
            { name: 'Aria', gender: 'female' },
            { name: 'Keit', gender: 'female' },
        ],
    },
    {
        name: 'Rob',
        friends: [
            { name: 'Taywin', gender: 'male' },
        ],
    },
];
export default function getGirlFriends(users){
    return users
        .map(user => user.friends)
        .flat()
        .filter(el => el.gender === 'female');
}

console.log(getGirlFriends(users));
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ];
