'use strict';

function solve(size, array, number) {
    let timesFound = count(array, size, number);

    return timesFound;
}

function count(array, size, number) {
    let timesFound = 0;

    for (let i = 0; i < size; i++) {
        if (array[i] === number) {
            timesFound++;
        }
    }

    return timesFound;
}

console.log(solve(8, [28, 6, 21, 6, -7856, 73, 73, -56], 73));
