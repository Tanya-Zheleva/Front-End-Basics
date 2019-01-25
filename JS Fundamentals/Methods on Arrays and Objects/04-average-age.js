'use strict';
let func = require('./01-make-person');

function getAverageAge() {
    let people = func.getPeople();

    let female = people
        .filter(x => x.gender === 'female')
        .map(x => x.age);
    let count = female.length;
    let averageAge = female.reduce((a, b) => a + b) / count;
    
    console.log(averageAge.toFixed(2));
}

getAverageAge();
