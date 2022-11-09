function multiply(a, b) {
    if(!a || !b){
        throw new Error ('Argument cannot be null');
    }
    return a * b;
}

module.exports = multiply;
