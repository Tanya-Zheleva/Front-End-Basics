'use strict';
let func = require('./01-make-person');

function group() {
    let people = func
    .getPeople()
    .sort((a, b) => a.firstName.localeCompare(b.firstName));

    people.forEach(x => console.log(x.toString()));

    let grouped = people.reduce((accumulator, person) => {
        let key = person.firstName[0];
        key = key.toLowerCase();

        if (!accumulator[key]) {
            accumulator[key] = [];
        }

        accumulator[key].push(person.toString());

        return accumulator;
    }, {});

    console.log();
    console.log(grouped);
}

group();