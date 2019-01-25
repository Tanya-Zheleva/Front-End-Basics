'use strict';
let func = require('./01-make-person');

function findPeople() {
    let people = func.getPeople(20);

    people
    .filter(x => x.age < 18)
    .forEach(x => console.log(x.toString()));
}

findPeople();