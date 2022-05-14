/*
Ваша задача — реализовать внутреннюю рекурсивную функцию iter(), которая
первым параметром принимает индекс текущего символа, а вторым — текущее значение аккумулятора.
Начальный вызов инициализируется значениями 0 для индекса и '' для аккумулятора. Алгоритм работы функции следующий:

Если текущий индекс выходит за границы строки (его значение превышает значение последнего индекса строки),
то поиск закончился и, значит, нужно возвратить аккумулятор, содержащий перевёрнутую строку.
В остальных случаях рекурсивно вызывается iter() с увеличением индекса на единицу и интерполяцией,
внутри которой к содержимому аккумулятора добавляется символ, взятый по текущему индексу.
*/

function reverse(string){
    let accumulator = '';
    function iter(index = 0) {
        if(index > string.length-1){
            return accumulator;
        }
        accumulator += string[string.length - 1 - index]
        iter(index+1)
    }
    iter()
    return accumulator;
}

const str = 'string';
console.log(reverse(str));

export default function alt_reverse(str){
    const lastIndex = str.length - 1;
    function iter(index,accumulator) {
        if(index > lastIndex){
            return accumulator;
        }
        accumulator += str[lastIndex - index];
        return iter(index+1,accumulator)
    }
    return iter(0, '');
};

console.log(alt_reverse(str));
