'use strict';

Array.prototype.remove = function(value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) {
            this.splice(i, 1);
        }           
    }

    return this;
}

function solve(array) {
    let toRemove = array[0];
    array = array.remove(toRemove);
    console.log(array.join('\n'));
}

solve([ '1', '2', '3', '2', '1', '2', '3', '2' ]);
solve([
    '_h/_',
    '^54F#',
    'V',
    '^54F#',
    'Z285',
    'kv?tc`',
    '^54F#',
    '_h/_',
    'Z285',
    '_h/_',
    'kv?tc`',
    'Z285',
    '^54F#',
    'Z285',
    'Z285',
    '_h/_',
    '^54F#',
    'kv?tc`',
    'kv?tc`',
    'Z285'])