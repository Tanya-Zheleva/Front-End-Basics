'use strict';

function checkTriangle(args) {
    let coordinates = args.map(Number);

    let lineA = extractLine(coordinates, 0);
    let lineB = extractLine(coordinates, 4);
    let lineC = extractLine(coordinates, 8);

    let lengthA = calculateLineLength(lineA);
    let lengthB = calculateLineLength(lineB);
    let lengthC = calculateLineLength(lineC);

    console.log(lengthA.toFixed(2));
    console.log(lengthB.toFixed(2));
    console.log(lengthC.toFixed(2));

    let isTriangle = canFormTriangle(lengthA, lengthB, lengthC);
    isTriangle ? 
        console.log('Triangle can be built') :
        console.log('Triangle can not be built');
}

function canFormTriangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false; 
    }

    return true;
}

function calculateLineLength(line) {
    let xDiff = Math.pow(line.end.x - line.start.x, 2);
    let yDiff = Math.pow(line.end.y - line.start.y, 2);
    let length = Math.sqrt(xDiff + yDiff);

    return length;
}

function extractLine(coordinates, startIndex) {
    let line = {
        start: {
            x: coordinates[startIndex + 0],
            y: coordinates[startIndex + 1]
        },
        end: {
            x: coordinates[startIndex + 2],
            y: coordinates[startIndex + 3]
        }
    };

    return line;
}

checkTriangle(['5', '6', '7', '8', '1', '2', '3', '4', '9', '10', '11', '12'])
checkTriangle(['7', '7', '2', '2', '5', '6', '2', '2', '95', '-14.5', '0', '-0.123']);