import {reverse, fill} from '../index.js';
test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');});

let array = [1,2,3,4];
beforeEach(()=>{
    array = [1,2,3,4];
})

test('fill', () => {
    expect(fill(array, '*', 1, 3)).toEqual([1, '*', '*', 4]);
});

test('fill', () => {
    expect(fill(array, '*')).toEqual(['*', '*', '*', '*']);
});

test('fill', () => {
    expect(fill(array, '*', 4)).toEqual([1, 2, 3, 4]);
});

test('fill', () => {
    expect(fill(array, '*', 0, 10)).toEqual(['*', '*', '*', '*']);
});


