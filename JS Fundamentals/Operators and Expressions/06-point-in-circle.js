'use strict';

function solve(args) {
    let x = Number(args[0]);
    let y = Number(args[1]);

    let centerX = 0;
    let centerY = 0;
    let radius = 2;

    let distance = Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2);
    let isInside = distance <= radius * radius;

    if (isInside) {
        console.log(`Yes ${distance}`);
    } else {
        console.log(`No ${distance}`);
    }
} 

solve(['0.5', '2.5']);