import HTMLElement from './HTMLElement.js';

// BEGIN (write your solution here)
class HTMLHrElement extends HTMLElement {
    tag = 'hr';
    toString(){
        const raw = this.tag + " " + super.stringifyAttributes()
        return `<${raw.trim()}>`
    }
}
// END

const hr = new HTMLHrElement({class:'hahclass', id:'hahID'})
console.log(hr.toString())

const hr2 = new HTMLHrElement()
console.log(hr2.toString())