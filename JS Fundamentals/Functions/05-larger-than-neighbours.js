'use strict';

function solve(size, ...array) {
    let largerFound = countLargerNeighbours(array, size);

    return largerFound;
}

function countLargerNeighbours(array, size) {
    let larger = 0;

    for (let i = 1; i < size - 1; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            larger++;
        }      
    }

    return larger;
}

console.log(solve(6, -26, -25, -28, 31, 2, 27,));