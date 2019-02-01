'use strict';

function parse(args) {
    let url = args[0];
    let regex = new RegExp(/(.*?):\/\/(.*?)(\/.*)/, 'gm');
    let matches = regex.exec(url);

    console.log(`protocol: ${matches[1]}`);
    console.log(`server: ${matches[2]}`);
    console.log(`resource: ${matches[3]}`);
}

parse(['http://telerikacademy.com/Courses/Courses/Details/239']);