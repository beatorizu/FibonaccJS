'use strict'

function* fibonacciGenerator() {
    let [current, next] = [0, 1];

    while(true) {
        yield current;
        [current, next] = [next, current + next];
    }
}

const fibonacci = (edge=350) => {
    const fibonacciSequence = [];

    for (const number of fibonacciGenerator()) {
        fibonacciSequence.push(number);
        if (number > edge) {
            break;
        }
    }
    return fibonacciSequence;
}

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
    fibonacci,
    isFibonnaci
}
