'use strict';

function solve(a, b, c) {
    let max = getMax(a, b);
    max = getMax(max, c);

    return max;
}

function getMax(a, b) {
    return a > b ? a : b;
}

console.log(solve(8, 3, 6));
console.log(solve(7, 19, 19));