function multiply(a, b) {
    if(!a || !b){
        throw new Error ('Argument cannot be null');
    }
    if(a === 'obj'){
        return {name:'ayrat',surname:'sungatullin'};
    }
    return a * b;
}

module.exports = multiply;
