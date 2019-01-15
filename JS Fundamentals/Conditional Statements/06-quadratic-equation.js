'use strict';

function solve(args) {
    let a = Number(args[0]);
    let b = Number(args[1]);
    let c = Number(args[2]);

    let discriminant = b * b - 4 * (a * c);

    if (discriminant > 0) {
        let root = Math.sqrt(discriminant);
        let x1 = (-b - root) / (2 * a);
        let x2 = (-b + root) / (2 * a);

        if (x1 > x2) {
            let t = x1;
            x1 = x2;
            x2 = t;
        }

        console.log(`x1=${x1.toFixed(2)}; x2=${x2.toFixed(2)}`);
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        console.log(`x1=x2=${x.toFixed(2)}`);
    } else {
        console.log('no real roots');
    }
}

solve(['0.2', '9.572', '0.2']);