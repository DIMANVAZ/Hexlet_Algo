/*Реализуйте логику функций, подготовленных в файле. Каждая из них принимает обработчик ошибки и класс ошибки.
Каждая функция отлавливает особый тип ошибок:

Функция anyErrorCatcher проверяет, что текущая ошибка наследуется от errorInstance
Функция appErrorCatcher проверяет, что текущая ошибка наследуется от errorInstance И от одной из ошибок приложения
Функция customErrorCatcher проверяет, что ошибка содержит свойство isCustomError со значением true и errorInstance при этом отсутствует
Если условие выполнено — ошибка передаётся в errorHandler. Если нет, то выбрасывается в исходном виде.  */


// BEGIN (write your solution here)

// END

export const anyErrorCatcher = (errorHandler, errorInstance) => (error) => {
    // BEGIN (write your solution here)

    // END
};

export const appErrorCatcher = (errorHandler, errorInstance) => (error) => {
    // BEGIN (write your solution here)

    // END
};

export const customErrorCatcher = (errorHandler, errorInstance) => (error) => {
    // BEGIN (write your solution here)

    // END
};
