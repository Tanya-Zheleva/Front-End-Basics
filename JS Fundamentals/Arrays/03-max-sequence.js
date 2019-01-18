'use strict';

function getMaxSequence(array) {
    let length = 1;
    let maxLength = -1;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            length++;
        }

        if (length > maxLength) {
            maxLength = length;
        }

        if (array[i] !== array[i + 1]) {
            length = 1;
        }

    }

    console.log(maxLength);
}

getMaxSequence(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);
getMaxSequence(['10', '2', '2', '2', '2']);
getMaxSequence(['2', '2', '2', '2', '2']);
getMaxSequence(['10', '2', '1', '0', '2', '3', '31']);