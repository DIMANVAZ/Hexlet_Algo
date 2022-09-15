import axios from 'axios';
import PostsService from './PostsService.js';

// BEGIN (write your solution here)
console.log('Введите номер поста, который желаете увидеть (цифра):');

process.stdin.setRawMode(true);
process.stdin.on('readable', function () {
    const key = String(process.stdin.read());
    console.log('Вы ввели: ', key);

    //const postNumber = process.argv[2] || '1';
    const postNumber = key || '1';

    new PostsService(axios)
        .request(postNumber)
        .then(({title,body, id}) => console.log(`Ваш запрошенный пост: \nID: ${id} \nЗаголовок: ${title}\n-------- \nТекст: ${body}`))

});


