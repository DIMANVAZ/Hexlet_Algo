const multiply = require('../index.js');

// простой тест
test('result',()=>{
    expect(multiply(3,4)).toEqual(12);
})

// тест на выбрасывание ошибки + проверка сообщения (в аргументах toThrow(*))
test('null error', () => {
    expect(()=> {
        multiply(null,4)
    }).toThrow('Argument cannot be null')
})

// проверка объекта
test('Проверяем объект', () => {
    // полученный объект частично совпадает с ожидаемым
    expect(multiply('obj',4)).toMatchObject({name:'ayrat'});
    // полученный объект имеет свойство name со значением ayrat
    expect(multiply('obj',4)).toHaveProperty('name','ayrat');
    // полученный объект имеет свойство name
    expect(multiply('obj',4)).toHaveProperty('name');
    // у полученного объекта есть определённые поля с определённым типом значения
    expect(multiply('obj',4)).toEqual(expect.objectContaining({
                    name: expect.any(String),
                    surname: expect.any(String)}))
})

test('Не равно', () => {
    expect(Math.random()).not.toEqual(Math.random());
})
