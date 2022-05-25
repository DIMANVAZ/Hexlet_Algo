// @ts-check

import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import { attach, contents } from '@hexlet/tagged-types';

//Реализуйте интерфейс работы карты с типом SimpleCard по аналогии с типом PercentCard.
// Второй параметр у конструктора - урон.

export const make = (name, damage) => attach('SimpleCard', cons(name, damage));

export const getName = (self) => car(contents(self));

export const damage = (self) => cdr(contents(self))();

