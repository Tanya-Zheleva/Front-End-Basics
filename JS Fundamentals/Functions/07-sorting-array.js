'use strict';

function solve(size, index, ...array) {
    let maxElement = getMaxElementInPortion(array, size, index);

    console.log(`Max element, starting from ${index}: ${maxElement} (before sorting)`);
    sort(array, size);
    console.log(array.join(', '));
}

function sort(array, size) {
    for (let i = 0; i < size - 1; i++) {
        let min = i;
        
        for (let j = i + 1; j < size; j++) {
            if (array[min] > array[j]) {
               min = j; 
            }        
        }

        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
}

function getMaxElementInPortion(array, size, index) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = index; i < size; i++) {
        if (array[i] > max) {
            max = array[i];
        } 
    }

    return max;
}

solve(10, 5, 36, 10, 1, 34, 28, 38, 31, 27, 30, 20);