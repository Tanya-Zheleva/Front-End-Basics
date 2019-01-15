'use strict';

function solve(args) {
    let a = Number(args[0]);
    let b = Number(args[1]);
    let h = Number(args[2]);

    let area = (a + b) * h / 2;
    console.log(area.toFixed(7));
}

solve(['4', '5', '5']);