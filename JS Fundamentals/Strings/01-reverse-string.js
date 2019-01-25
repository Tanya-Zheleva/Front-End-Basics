'use strict';

function reverse(args) {
    let string = args[0];
    let reversed = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }

    console.log(reversed);
}

reverse(['sample']);
reverse(['qwertytrewq']);