class OctokitFake{
    constructor() {
        this.repos = {a:1}
    }
    eros = {b:2}
}

const o = new OctokitFake();
console.log(o.repos);
console.log(o.eros);


