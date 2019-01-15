'use strict';

function solve(args) {
    let number = Number(args[0]);
    let bit = (number >> 2) & 1;

    console.log(bit);  
}

solve(['124']);