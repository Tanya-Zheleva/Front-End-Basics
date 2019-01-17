'use strict';

function printNumbers(args) {
    let n = Number(args[0]);
    let printed = '';

    for (let i = 1; i <= n; i++) {
        printed += `${i} `;
    }

    console.log(printed);
}

printNumbers(['7']);