'use strict';

let digits = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

function getTeen(number) {
    switch (number) {
        case 10:
            return 'Ten';
        case 11:
            return 'Eleven';
        case 12:
            return 'Twelve';
        case 13:
            return 'Thirteen';
        case 15:
            return 'Fifteen';
        default:
            return digits[number - 10] + 'teen';
    }
}

function getDecimals(number) {
    let decimal = '';

    if (number >= 20 && number < 30) {
        decimal = 'Twenty ';
    } else if (number >= 30 && number < 40) {
        decimal = 'Thirty ';
    } else if (number >= 40 && number < 50) {
        decimal = 'Forty ';
    } else if (number >= 50 && number < 60) {
        decimal = 'Fifty ';
    } else if (number >= 60 && number < 70) {
        decimal = 'Sixty ';
    } else if (number >= 70 && number < 80) {
        decimal = 'Seventy ';
    } else if (number >= 80 && number < 90) {
        decimal = 'Eighty ';
    } else {
        decimal = 'Ninety ';
    }

    if (number % 10 !== 0) {
        decimal += digits[number % 10].toLocaleLowerCase();
    }

    return decimal;
}

function getHundreds(number) {
    let t = Math.floor(number / 100);
    let hundreds = digits[t];
    hundreds += ' hundred';
    let remain = number % 100;

    if (remain === 0) {
        return hundreds;
    }

    if (remain >= 1 && remain < 10) {
        hundreds += ` and ${digits[remain].toLocaleLowerCase()}`;
    } else if (remain >= 10 && remain < 20) {
        hundreds += ` and ${getTeen(remain).toLocaleLowerCase()}`;
    } else {
        hundreds += ` and ${getDecimals(remain).toLocaleLowerCase()}`;
    }

    return hundreds;
}

function convertToWords(args) {
    let number = Number(args[0]);

    if (number >= 0 && number < 10) {
        console.log(digits[number]);
    } else if (number >= 10 && number < 20) {
        console.log(getTeen(number));
    } else if (number >= 20 && number < 100) {
        console.log(getDecimals(number));
    } else if (number >= 100 && number < 1000) {
        console.log(getHundreds(number));
    } else {
        console.log('Invalid number');
    }
}

convertToWords(['711']);