'use strict';

function format(args) {
    let format = args[0];
    args.shift();
    let parameters = args;

    let regex = new RegExp('\\{(\\d+)\\}', 'gm');
    let match = regex.exec(format);

    while (match) {
        let index = Number(match[1]);
        format = format.replace(match[0], parameters[index]);

        match = regex.exec(format);
    }

    console.log(format);
}

format([
    '{0}, {1}, {0} text {2}',
    1,
    'Pesho',
    'Gosho'
]);

format([
 '{0} + {1} + {2} = {3}',
    1,
    10,
    2,
    13
]);