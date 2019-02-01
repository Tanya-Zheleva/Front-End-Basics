'use strict';

String.prototype.bind = function (data) {
    let parsed = JSON.parse(data);
    let regex = new RegExp('^(<.*?)>', 'g');
    let matches = regex.exec(this);
    let base = matches[1];

    //console.log(base);

    // for (let key in parsed) {
    //     console.log(key, parsed[key]);
    // }

    let bindingRegex = new RegExp('data-bind-([a-z\-]+)="([a-z\-]+)"', 'gm');
    let bindingMatches = bindingRegex.exec(this);
    
    while (bindingMatches) {
        console.log(bindingMatches);

        bindingMatches = bindingRegex.exec(this);
    }

    return 'meh';
}

function solve(args) {
    let html = args[1];
    let data = args[0];

    let result = html.bind(data);

    console.log(result);
}

solve([
    '{ "name": "Steven" }',
    '<div data-bind-content="name"></div>'
]);

solve([
    '{ "name": "Elena", "link": "http://telerikacademy.com" }',
    '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
]);