'use strict';

function makeCopy() {
    let line = {
        name: 'A',
        points: ['B', 'C', 'D'],
        start: {
            x: 2,
            y: 2
        },
        end: {
            x: 6,
            y: 8
        },
        length: function () {
            let xDiff = Math.pow(line.end.x - line.start.x, 2);
            let yDiff = Math.pow(line.end.y - line.start.y, 2);
            let length = Math.sqrt(xDiff + yDiff);

            return length;
        }
    };

    let copy = Object.assign({}, line);
    console.log(line);
    console.log(copy);
}

makeCopy();