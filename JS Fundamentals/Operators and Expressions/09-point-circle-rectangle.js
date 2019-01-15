'use strict';

function isInCircle(x, y) {
    let centerX = 1;
    let centerY = 1;
    let radius = 1.5;

    let distance = Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2);
    let isInside = distance <= radius * radius;

    return isInside;
}

function isNotInRectangle(x, y) {
    let top = 1;
    let left = -1;
    let width = 6;
    let height = 2;

    let isOut = x < left || x > left + width || y > top || y < top - height;

    return isOut;
}

function solve(args) {
    let x = Number(args[0]);
    let y = Number(args[1]);

    let inCircle = isInCircle(x, y);
    let notInRect = isNotInRectangle(x, y);

    if (inCircle && notInRect) {
        console.log ('inside circle outside rectangle');
    } else if (inCircle && !notInRect) {
        console.log('inside circle inside rectangle');
    } else if (!inCircle && !notInRect) {
        console.log('outside circle inside rectangle');
    } else {
        console.log('outside circle outside rectangle');
    }
}

solve(['0', '0']);