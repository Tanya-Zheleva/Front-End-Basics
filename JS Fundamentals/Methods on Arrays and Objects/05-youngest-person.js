'use strict';
let func = require('./01-make-person');

function findYoungestPerson() {
    let people = func.getPeople(10);
    people.forEach(x => console.log(x.toString()));

    let youngestMale = people
        .sort((a, b) => a.age - b.age)
        .find(x => x.age >= 0 && x.gender === 'male');

    console.log(`Youngest person: ${youngestMale.firstName} ${youngestMale.lastName}, ${youngestMale.age}`);
}

findYoungestPerson();