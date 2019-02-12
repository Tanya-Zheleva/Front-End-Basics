'use strict';

function fill(element, content) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    for (let i = 0; i < content.length; i++) {
        let node = document.createElement('div');
        node.innerHTML = content[i];
        element.appendChild(node);
    }
}

function solve(element, content) {
    if (!(element && content)) {
        throw 'Invalid arguments';
    }

    if (!Array.isArray(content)) {
        throw 'Second argument must be an array';
    }

    if (!content.every(x => typeof x === 'string' || typeof x === 'number')) {
        throw 'Content elements can only be strings, numbers or DOM elements';
    }

    if (element instanceof Element) {
        fill(element, content);

        document.body.appendChild(element);
    } else {
        let byId = document.getElementById(element);

        if (!byId) {
            throw 'Element not found';
        }

        fill(byId, content);
    }
}

let myEl = document.createElement('div');
myEl.textContent = 'New DOM element';

try {
    solve(myEl, ['one', 'two', 'three']);
} catch (error) {
    console.log(error);    
}

try {
    solve('test', [3, 4, 's', '5']);
} catch (error) {
    console.log(error);
}
