'use strict';

function solve(args) {
    let n = Number(args[0]);
    let array = new Array();

    for (let i = 1; i <= n; i++) {
        array.push(i);
    }

    permute(array, n);
}

function permute(array, length) {
    if (length === 1) {
        print(array);
    }

    for (let i = 0; i < length; i++) {
        permute(array, length - 1);

        if (length % 2 == 1) {
            let temp = array[0];
            array[0] = array[length - 1];
            array[length - 1] = temp;
        } else {
            let temp = array[i];
            array[i] = array[length - 1];
            array[length - 1] = temp;
        }
    }
}

function print(array) {
    console.log(array.join(' '));
}

solve(['3']);