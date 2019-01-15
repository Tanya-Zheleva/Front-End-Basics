'use strict';

function getBiggest(args) {
    let first = Number(args[0]);
    let second = Number(args[1]);
    let third = Number(args[2]);

    if (first >= second && first >= third) {
        console.log(first);
    } else if (second >= first && second >= third) {
        console.log(second);
    } else {
        console.log(third);
    }
}

getBiggest(['-0.1', '-0.5', '-1.1']);