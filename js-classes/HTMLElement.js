export default class HTMLElement {
    constructor(attributes = {}) {
        this.attributes = attributes;
    }

    stringifyAttributes() {
        // BEGIN (write your solution here)
        let javap = '';
        for(let attr in this.attributes){
            javap += `${attr}="${this.attributes[attr]}" `
        }
        return javap.trim()
        // END
    }
}

console.log(new HTMLElement({class:'hahclass', id:'hahID'}).stringifyAttributes())
