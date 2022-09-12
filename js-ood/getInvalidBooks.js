/*  Сотрудники библиотеки решили провести ревизию базы данных своих книг, все ли заполнено правильно.
Для этого им понадобится программа, которая находит список книг с неправильно заполненными данными.

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список книг, находит среди них невалидные и возвращает их наружу.

Описания формата каждой книги:
    name – строка, обязательное
    author – строка, обязательное
    pagesCount – положительное число, необязательное
    link – строка url, необязательное, не может быть пустой строкой; ссылка на книгу в интернете
    genre – строка, необязательное; жанр книги. Должен входить в список определенный в файле index.js   */

import yup from 'yup';

const genres = [
    'drama', 'horror', 'fantasy', 'classic',
];

export default function getInvalidBooks(booksArray){
    const schema = yup.object().shape({
        name: yup.string().required(),
        author: yup.string().required(),
        pagesCount: yup.number().positive(),
        link: yup.string().min(3).url(),
        genre: yup.string().oneOf(genres)
    });

    return booksArray.filter(function(book){
        return !schema.isValidSync(book);
    })
}

const books = [
    { name: 'book', author: 'author' },
    { author: 'author 2' },
];
const invalidBooks = getInvalidBooks(books); // [{ author: 'author 2' }]
console.log(invalidBooks);

