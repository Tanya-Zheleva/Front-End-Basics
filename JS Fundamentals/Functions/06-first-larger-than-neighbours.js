'use strict';

function solve(size, array) {
    let index = getFirstLargestElementIndex(array, size);

    return index;
}

function getFirstLargestElementIndex(array, size) {
    for (let i = 1; i < size - 1; i++) {
        if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
            return i;
        }      
    }

    return -1;
}

console.log(solve(6, [-26, -25, -28, 31, 2, 27]));
console.log(solve(4, [-26, -25, -22, 31]));