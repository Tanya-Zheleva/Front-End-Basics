'use strict';

function compare(args) {
    let first = args[0];
    let second = args[1];

    let minLength = first.length > second.length ? second.length : first.length;

    for (let i = 0; i < minLength; i++) {
        if (first[i] > second[i]) {
            return '>';
        } else if (first[i] < second[i]) {
            return '>';
        }
    }

    if (first.length > second.length) {
        return '>';
    } else if (second.length > first.length) {
        return '<';
    }

    return '=';
}

console.log(compare(['hello', 'halo']));
console.log(compare(['food', 'food']));
console.log(compare(['aaa', 'aaaa']));

//Second try
function compare2(args) {
    let first = args[0];
    let second = args[1];

    let result = first.localeCompare(second);

    if (result === 1) {
        return '>';
    } else if (result === 0) {
        return '=';
    }

    return '<';
}

console.log();
console.log(compare2(['hello', 'halo']));
console.log(compare2(['food', 'food']));
console.log(compare2(['aaa', 'aaaa']));