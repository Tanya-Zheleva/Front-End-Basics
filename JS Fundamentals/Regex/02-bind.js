'use strict';

String.prototype.bind = function (data) {
    let parsed = JSON.parse(data);
    let regex = new RegExp('^(<.*?)>', 'g');
    let matches = regex.exec(this);

    let base = new Array();
    base.push(matches[1]);
    
    let bindingRegex = new RegExp('data-bind-([a-z\-]+)="([a-z\-]+)"', 'gm');
    let bindingMatches = bindingRegex.exec(this);

    while (bindingMatches) {
        let type = bindingMatches[1];

        if (type !== 'content') {
            base.push(` ${type}="${parsed[bindingMatches[2]]}"`);
        }

        bindingMatches = bindingRegex.exec(this);
    }

    let closingTag = /(<\/.*?>)/g.exec(this);
    base.push(`>${parsed['name']}${closingTag[1]}`);

    return base.join('');
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