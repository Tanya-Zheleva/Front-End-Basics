'use strict';

function search(args) {
    let size = Number(args[0]);
    let array = new Array();
    let toFind = Number(args[size + 1]);

    for (let i = 1; i < args.length - 1; i++) {
        array.push(Number(args[i]));     
    }

    let index = getIndex(array, toFind, 0, size);
    console.log(index); 
}

function getIndex(array, toFind, start, end) {
    if (start >= end) {
        return -1;
    }

    let mid = Math.floor((start + end) / 2);

    if (array[mid] === toFind) {
        return mid;
    }

    if (array[mid] < toFind) {
        return getIndex(array, toFind, mid + 1, end);
    }

    if (array[mid] > toFind) {
        return getIndex(array, toFind, start, mid);
    }
}

search(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']);
search(['5', '1', '2', '4', '5', '7', '31']);
search(['7', '1', '2', '4', '5', '7', '10', '13', '4']);