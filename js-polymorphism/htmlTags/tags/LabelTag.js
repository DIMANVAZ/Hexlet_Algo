export default class LabelTag {
    constructor(body, someTag) {
        this.body = body;
        this.someTag = someTag;
    }

    render(){
        const inner = this.someTag.render();
        return `<label>${this.body}${inner}</label>`
    }
}