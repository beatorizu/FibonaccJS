'use strict'

const fibonacci = () => {
    let fibonacciSequence = [];
    let j = 1;
    let i = 0;

    for (let k = 0; k < 14; k++) {
        let t = i + j;
        i = j;
        j = t;
        fibonacciSequence.push(t);
    }
    return fibonacciSequence;
}

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}
