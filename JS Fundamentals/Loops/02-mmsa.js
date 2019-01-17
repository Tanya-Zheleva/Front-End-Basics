'use strict';

function solve(args) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        let element = Number(args[i]);
        
        if (element < min) {
            min = element;
        }

        if (element > max) {
            max = element;
        }

        sum += element;
    }

    console.log(`min=${min.toFixed(2)}`);
    console.log(`max=${max.toFixed(2)}`);
    console.log(`sum=${sum.toFixed(2)}`);
    console.log(`avg=${(sum / args.length).toFixed(2)}`);
}

solve(['2', '-1', '4']);