// В JS у строк есть метод substr. В этом задании мы его реализуем самостоятельно.
// Просьба не использовать этот метод и метод slice внутри вашей реализации.
export default function substr(string,startIndex,length = string.length){

}

substr('abba', 0, 1);    // a
substr('abba', 1, 2);    // bb
substr('abba', -10, 2);  // ab
substr('abba', -1, 100); // abba
substr('abba', -1, -1);  // a
substr('abba', 1, -10);  // b
substr('abba', 1, 10);   // bba
substr('abba', 1, 0);    // ''
substr('abba', 100, 3);  // ''
substr('');     // ''
substr('abba'); // abba
