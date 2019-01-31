'use strict';

function replace(args) {
    let string = args[0];

    string = string.replace(/ /gm, '&nbsp;');
    console.log(string);
}

replace(['hello world']);
replace(['This text contains 4 spaces!!']);