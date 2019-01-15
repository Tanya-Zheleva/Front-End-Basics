'use strict';

function exchange(args) {
    let a = Number(args[0]);
    let b = Number(args[1]);

    if (a > b) {
        let t = a;
        a = b;
        b = t;
    }

    console.log(`${a} ${b}`);
}

exchange(['5', '6']);