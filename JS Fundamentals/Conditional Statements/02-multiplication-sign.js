'use strict';

function getSign(args) {
    let product = args[0] * args[1];
    product *= args[2];

    if (product > 0) {
        console.log('+');       
    } else if (product < 0) {
        console.log('-');
    } else {
        console.log(0);
    }  
}

getSign(['-1', '-0.5', '-5.1']);