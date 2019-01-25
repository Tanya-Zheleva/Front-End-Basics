'use strict';

function hasValidBrackets(args) {
    let expression = args[0];
    let checker = 0;

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            checker++;
        } else if (expression[i] === ')') {
            checker--;
        }
    }

    checker === 0 ?
        console.log('Correct') :
        console.log('Incorrect');
}

hasValidBrackets(['((a+b)/5-d)']);
hasValidBrackets([')(a+b))']);