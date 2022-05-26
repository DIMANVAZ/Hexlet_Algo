import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import { cons as consList, isEmpty, l, head, tail, toString as dataToString } from '@hexlet/pairs-data'; // eslint-disable-line
import { attach, typeTag, contents } from '@hexlet/tagged-types';

let methods = l(); // methods - это список пар

export const getMethod = (obj, methodName) => {
    // BEGIN (write your solution here)
    function rotator(listOfMethods) {
        if (isEmpty(listOfMethods)) {
            return;
        }

        if (typeTag(head(listOfMethods)) === typeTag(obj)
            && typeTag(contents(head(listOfMethods))) === methodName) {
            return contents(contents(head(listOfMethods)));
        }
        return rotator(tail(listOfMethods));
    }
    return rotator(methods);
    // END
};

export const definer = (type) => (methodName, f) => {
    methods = consList(attach(type, cons(methodName, f)), methods);
};

/* methods - это список пар
    (
        pair: (PercentCard, (damage, (self, health) => Math.round(health * (cdr(self) / 100)))),
        pair: (PercentCard, (getName, self => car(self))),
        pair: (SimpleCard, (damage, self => cdr(self))),
        pair: (SimpleCard, (getName, self => car(self)))
    )
* */