'use strict';

function solve(element, content) {
    if (arguments.length < 2) {
        throw 'Invalid arguments';
    }

    if (typeof arguments[0] !== 'string') {
        throw 'First argument must be a string';
    }

    if (!Array.isArray(arguments[1])) {
        throw 'Second argument must be an array';
    }

    if (!content.every(x => typeof x === 'string' || typeof x === 'number')) {
        throw 'Content elements can only be strings or numbers';
    }

    let byId = document.getElementById(element);
    let byElement = document.getElementsByTagName(element)[0];

    if (byId === null && byElement === undefined) {
        throw 'Element not found';
    }

    let found = byId !== null ? byId : byElement;
    found.innerHTML = '';

    for (let i = 0; i < content.length; i++) {
        let node = document.createElement('div');
        node.innerHTML = content[i];
        found.appendChild(node);
    }
}

try {
    solve('li', [3, 4, 's', '5']);
} catch (error) {
    console.log(error);
}