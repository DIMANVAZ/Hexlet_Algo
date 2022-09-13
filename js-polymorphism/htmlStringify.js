/*  Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход тег и возвращает его текстовое представление.
    В структуре тега есть три специальных ключа:

    name — имя тега.
    tagType — тип тега, определяет его парность (pair) или одиночность (single).
    body — тело тега, используется для парных тегов. Если у парного тега нет содержимого, то body равно пустой строке ''.

    Всё остальное становится атрибутами тега и не зависит от того, парный он или нет.   */

// пример диспетчеризации по ключу (функции) - см return;
export default function stringify(tag){
    const {name, tagType, body, ...rest} = tag;

    const injection = Object.keys(rest).reduce((acc,val) => {
        return acc +` ${val}="${tag[val]}"`
    },'');

    const pairUnpair = {
        'pair':()=>{
            return `<${name}${injection}>${body}</${name}>`
        },
        'single':()=>{
            return `<${name}${injection}>`
        }
    }
    return pairUnpair[tagType]();
}

const hrTag = {
    name: 'hr',
    class: 'px-3',
    id: 'myid',
    tagType: 'single',
};
const html1 = stringify(hrTag); // <hr class="px-3" id="myid">

const divTag = {
    name: 'div',
    tagType: 'pair',
    body: 'text2',
    id: 'wow',
};
const html2 = stringify(divTag); // <div id="wow">text2</div>

const emptyDivTag = {
    name: 'div',
    tagType: 'pair',
    body: '',
    id: 'empty',
};
const html3 = stringify(emptyDivTag); // <div id="empty"></div>

console.log(html1,'\n',html2, '\n',html3);




console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

console.log(filterAnagrams('laser', ['lazing', 'lazy',  'lacer']));
// []
console.log(anagramator('arf','aerhig'))
console.log(anagramator('arf','afrtt'))
console.log(anagramator('arfx','frax'))