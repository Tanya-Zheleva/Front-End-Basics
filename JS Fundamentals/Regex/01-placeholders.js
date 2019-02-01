'use strict';

function format(args) {
    let data = JSON.parse(args[0]);
    let string = args[1];

    for (let key in data) {
        let regex = new RegExp(`#\\{${key}\\}`, 'gm')
        string = string.replace(regex, data[key]);
    }

    console.log(string);
}

format([
    '{ "name": "John" }',
    "Hello, there! Are you #{name}?"
]);

format([
    '{ "name": "John", "age": 13 }',
    "My name is #{name} and I am #{age}-years-old"
]);