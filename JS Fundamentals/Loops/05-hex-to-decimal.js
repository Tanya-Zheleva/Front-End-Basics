'use strict';

function getDigit(n) {
    switch (n) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            return Number(n);
        case 'A':
            return 10;
        case 'B':
            return 11;
        case 'C':
            return 12;
        case 'D':
            return 13;
        case 'E':
            return 14;
        case 'F':
            return 15;
        default:
            return -1;
    }
}

function toDecimal(args) {
    let hex = args[0];
    let decimal = 0;
    let base = 16;
    let power = 0;

    for (let i = hex.length - 1; i >= 0; i--) {
        let digit = getDigit(hex[i]);
        decimal += digit * Math.pow(base, power);
        power++;
    }

    console.log(decimal);
}

toDecimal(['4ED528CBB4']);