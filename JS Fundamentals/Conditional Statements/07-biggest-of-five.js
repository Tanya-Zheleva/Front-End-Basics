'use strict';

function getBiggest(args) {
    let max = Number(args[0]);
    let b = Number(args[1]);
    let c = Number(args[2]);
    let d = Number(args[3]);
    let e = Number(args[4]);

    if (max < b) {
        max = b;
    }

    if (max < c) {
        max = c;
    }

    if (max < d) {
        max = d;
    }

    if (max < e) {
        max = e;
    }

    console.log(max);
}

getBiggest(['-3', '-0.5', '-1.1', '-2', '-0.1']);