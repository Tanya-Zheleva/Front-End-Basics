'use strict';

function printMatrix(args) {
    let n = Number(args[0]);
    let matrixLength = n * n;
    let numbers = '';
    let index = 0;
    let rowStart = 2;
    let value = 1;

    while (index < matrixLength) {
        if (index % n === 0 && index !== 0) {
            numbers += '\n';
            value = rowStart;
            rowStart++;
        }

        numbers += ` ${value}`;
        value++;
        index++;
    }

    console.log(numbers);
}

printMatrix(['4']);