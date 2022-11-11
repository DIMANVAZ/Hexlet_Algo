const sorter = require('../fastCheck');
const fc = require('fast-check');

test('на сорт', () => {
    expect(sorter([1,2,4,3])).toEqual([1,2,3,4]);
})

test('fast check', () => {
    fc.assert(
        fc.property(
            fc.array(fc.nat()),
            (a) => {
                console.log(a);
                return a.sort() == sorter(a)
            }
        )
    );
});

