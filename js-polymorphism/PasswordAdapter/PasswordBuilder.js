import crypto from 'crypto';
import PasswordGeneratorAdapter from "./PasswordGeneratorAdapter.js";

export default class PasswordBuilder {
    constructor(passwordGenerator) {
        this.passwordGenerator = passwordGenerator;
    }

    buildPassword(length = 8, options = ['numbers', 'symbols']) {
        const password = this.passwordGenerator.generatePassword(length, options);
        const digest = crypto.createHash('sha1').update(password).digest('hex');

        return { password, digest };
    }
}

const builder = new PasswordBuilder(new PasswordGeneratorAdapter());

// Первый параметр длина пароля (length в генераторе)
// Второй, набор опций
// Для настройки генератора смотрите официальную документацию https://github.com/brendanashworth/generate-password

const passwordInfo = builder.buildPassword(10, ['uppercase', 'symbols']);
// {
//    password: 'giK-;SH?Jx',
//    digest: '379ad800edca49029fb90e7200001812277bbeae',
// }

const passwordInfo2 = builder.buildPassword(10, []);
// {
//    password: 'zgalhrheru',
//    digest: '97d73ac22ad943d2db824712154b3f354cd80d10',
// }