'use strict'

const fibonacci = () => {
    const fibonacciSequence = [0, 1];

    for (let k = 0; k < 14; k++) {
        fibonacciSequence.push(fibonacciSequence.slice(-2).reduce((acc, value) => acc + value, 0));
    }
    return fibonacciSequence;
}

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}
