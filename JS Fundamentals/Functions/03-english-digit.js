'use strict';

function solve(number) {
    let digit = getLastDigitName(number);
    console.log(digit);  
}

function getLastDigitName(number) {
    let left = Math.abs(number % 10);

    switch (left) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 0:
            return 'eight';
        case 9:
            return 'nine';
        default:
            return 'invalid number';
    }
}

solve(42);
solve(-19);
solve(20);
solve('test');