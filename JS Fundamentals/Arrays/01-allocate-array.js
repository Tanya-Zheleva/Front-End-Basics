'use strict';

function print(args) {
    let size = Number(args[0]);
    let array = new Array(size);

    for (let i = 0; i < array.length; i++) {
        array[i] = i * 5;
    }

    console.log(array.join('\n'));
}

print(['5']);