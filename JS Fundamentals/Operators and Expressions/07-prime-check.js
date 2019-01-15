'use strict';

function isPrime(n) {
    if (n === 2) {
        return true;
    }

    if (n < 2 || n % 2 === 0) {
        return false;
    }

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function solve(args) {
    let number = Number(args[0]);
    let prime = isPrime(number);

    console.log(prime);
}

solve(['248']);