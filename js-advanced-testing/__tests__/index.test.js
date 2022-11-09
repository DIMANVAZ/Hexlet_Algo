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
