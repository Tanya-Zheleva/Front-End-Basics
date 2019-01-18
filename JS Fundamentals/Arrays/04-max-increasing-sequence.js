'use strict';

function getMaxIncreasingSequence(array) {
    let length = 1;
    let maxLength = 1;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) {
            length++;
        }

        if (length > maxLength) {
            maxLength = length;
        }

        if (array[i] >= array[i + 1]) {
            length = 1;
        }
    }

    console.log(maxLength);   
}

getMaxIncreasingSequence(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
getMaxIncreasingSequence(['2', '2', '2', '2']);
getMaxIncreasingSequence(['2']);
getMaxIncreasingSequence(['2', '2', '2', '2', '3']);