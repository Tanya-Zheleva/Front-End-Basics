'use strict';

function extractText(args) {
    let temp = new Array();
    args.forEach(x => temp.push(x.trim()));
    
    let string = temp.join('');
    let matches = string.match(/>([^<>]+)</gm);

    let newString = matches
        .join('')
        .replace(/>/gm, '')
        .replace(/<\//gm, '')
        .replace(/</gm, '');

    console.log(newString);
}

extractText([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);