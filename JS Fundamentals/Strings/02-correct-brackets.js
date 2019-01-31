'use strict';

function hasValidBrackets(args) {
    let expression = args[0];
    let checker = 0;

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            checker++;
        } else if (expression[i] === ')') {
            if (checker <= 0) {
                return false;
            }

            checker--;
        }
    }

    return checker === 0 ? true : false;
}

hasValidBrackets(['((a+b)/5-d)']) ?
    console.log('Correct') :
    console.log('Incorrect');

hasValidBrackets([')(a+b))']) ?
    console.log('Correct') :
    console.log('Incorrect');

hasValidBrackets([")5(((44))"]) ?
    console.log('Correct') :
    console.log('Incorrect');

hasValidBrackets([")5(((44)))"]) ?
    console.log('Correct') :
    console.log('Incorrect');