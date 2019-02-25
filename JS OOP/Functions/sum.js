'use strict';

function sum(args) {
    if (args.length === 0) {
        throw 'Empty array';
    }

    if (arguments.length === 0) {
        throw 'No parameters are passed';
    }

    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        let element = args[i];
        
        if (typeof element !== 'string' && typeof element !== 'number') {
            throw 'Invalid arguments';
        }

        if (typeof element === 'string') {
            element = Number(element);
        }

        sum += element;
    }

    return sum;
}

try {
    console.log(sum(['5', '5.5', 2,]));
} catch (error) {
    console.log(error);    
}