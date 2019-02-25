'use strict';

function isPrime(n) {
    if (n === 2) {
        return true;
    }

    if (n <= 1 || n % 2 === 0) {
        return false;
    }

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

function getPrimes(start, end) {
    if (arguments.length !== 2) {
        throw 'Invalid parameters count';
    }

    if (start > end) {
        throw 'Invalid parameters. End must be greater than start';
    }

    if (isNaN(start) && isNaN(end)) {
        throw 'Invalid parameter types';
    }

    let primes = new Array();

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

try {
    console.log(getPrimes(-5, '20'));
} catch (error) {
    console.log(error);
}