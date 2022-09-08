/*  Реализуйте функцию takeOldest(), которая принимает на вход список пользователей и возвращает самых взрослых.
Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице.
Экспортируйте данную функцию по умолчанию.  */

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

export default function takeOldest(users,howMuch=1){
    return users.sort((a,b) =>{
        return Math.sign(Date.parse(a.birthday) - Date.parse(b.birthday))
    }).slice(0,howMuch);
}

console.log(takeOldest(users));
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];