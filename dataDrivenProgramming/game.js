import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';
import { cons as consList, l, random, head, reverse, toString as listToString } from '@hexlet/pairs-data';
/*
Допишите функцию iter(), которая является частью ядра игрового движка и описывает в себе логику одного хода.

1. Если здоровье игрока, которого атаковали на предыдущем шаге (в примерах этого и следующего пунктов мы предполагаем,
что это первый игрок с именем name1), меньше или равно 0, то добавляем в лог элемент с сообщением вида
        ${name1} был убит и возвращаем лог. Игра закончена.

2. В ином случае, берём рандомную карту, вычисляем урон, записываем новое здоровье, формируем сообщение формата:

    const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;

Формируем элемент лога формата cons(cons(health1, health2), message) и добавляем его в лог. Повторяем.

Параметр order в функции iter() нужен для определения того, какой игрок сейчас атакует.
Используйте функцию random() для выбора карты из колоды.
Колода карт передаётся в игру через параметр cards.
*/

const run = (player1, player2, cards) => {
    const iter = (health1, name1, health2, name2, order, log) => {
        if (health1 <= 0){
            const killMessage = `${name1} был убит`;
            const logItem = cons(cons(health1, health2), killMessage);
            log = consList(logItem,log);
            return log;
        }
        if (health2 <= 0){
            const killMessage = `${name2} был убит`;
            const logItem = cons(cons(health1, health2), killMessage);
            log = consList(logItem,log);
            return log;
        }
        //-часть 2 - begin
            const card = random(cards);
        //часть 2 - end

            const cardName = car(card);
            const damage = cdr(card)();

        if(order>0){
            const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;
            health2 = health2-damage;
            const logItem = cons(cons(health1, health2), message);
            log = consList(logItem,log);
            return iter(health1, name1, health2, name2, -order, log);
        }
        if(order<0){
            const message = `Игрок '${name2}' применил '${cardName}' против '${name1}' и нанес урон '${damage}'`;
            health1 = health1-damage;
            const logItem = cons(cons(health1, health2), message);
            log = consList(logItem,log);
            return iter(health1, name1, health2, name2, -order, log);
        }
    };

    const startHealth = 10;
    const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
    return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};


