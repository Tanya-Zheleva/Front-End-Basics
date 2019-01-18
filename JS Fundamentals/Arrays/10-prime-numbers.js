'use strict';

function findPrime(args) {
    let n = Number(args[0]);
    let numbers = new Array(n + 1);

    for (let i = 0; i <= n; i++) {
        numbers[i] = true;
    }

    for (let i = 2; i < n * n; i++) {
        if (numbers[i]) {
            for (let k = i * i; k <= n; k += i) {
                numbers[k] = false;
            }
        }
    }

    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i]) {
            return i;
        }       
    }
}

console.log(findPrime(['13']));