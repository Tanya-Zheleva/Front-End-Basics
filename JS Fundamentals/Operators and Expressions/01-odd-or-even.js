'use strict';

function solve(args)
{
    let number = Number(args[0]);

    if (number % 2 === 0) {
        console.log(`Even ${number}`);    
    } else {
        console.log(`Odd ${number}`);
    }
}

solve(['2']);