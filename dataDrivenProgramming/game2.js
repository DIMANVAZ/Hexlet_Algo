
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from '@hexlet/pairs-data'; // eslint-disable-line

/* Создайте и экспортируйте по умолчанию функцию, которая принимает на вход колоду карт и функцию выбора случайного
элемента из списка (списка карт). Второй аргумент — опциональный, его значение по умолчанию — функция random()
из @hexlet/pairs-data. Ваша функция будет возвращать другую функцию.
При этом возвращаемая функция работает следующим образом:
 - принимает на вход имена игроков
 - запускает игру
 - возвращает лог игры
Допишите вызов пользовательской функции random() в функции run(). */

const run = (player1, player2, cards, customRandom) => {
    const iter = (health1, name1, health2, name2, order, log) => {
        if (health1 <= 0) {
            return consList(cons(car(head(log)), `${name1} был убит`), log);
        }
        // BEGIN (write your solution here)
        const card = customRandom(cards);
        // END
        const cardName = car(card);
        const damage = cdr(card)(health2);
        const newHealth = health2 - damage;

        const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${damage}'`;
        let stats;
        if (order === 1) {
            stats = cons(cons(health1, newHealth), message);
        } else if (order === 2) {
            stats = cons(cons(newHealth, health1), message);
        }
        const newLog = consList(stats, log);
        return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
    };

    const startHealth = 10;
    const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
    return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

// BEGIN (write your solution here)
export default function someFunc(cards, selector = random){
    return function (player1,player2){
        run(player1, player2, cards, selector);
    };
}
// END
