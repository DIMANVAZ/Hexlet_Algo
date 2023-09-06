/*
var complexFunction = function(arg1, arg2) {  complex calculation in here  };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

*/

function cache(func) {
    const cache = new Map();
    return function(...args){
        const key = JSON.stringify(args);  // превращаем аргументы в строку для использования в качестве ключа
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = func(...args);
            cache.set(key, result);
            return result;
        }
    }
}
