'use strict';

function solve(params) {
    let people = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
        { firstname: 'Bay', lastname: 'Ivan', age: 81 },
        { firstname: 'John', lastname: 'Doe', age: 42 },
        { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
        { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
        { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
    ];

    let byAge = groupBy(people);
    console.log(byAge);
}

function groupBy(people) {
    let grouped = {};

    for (let person of people) {
        let key = person.age;
        let hasKey = Object.keys(grouped).some(x => x.localeCompare(key) === 0);

        if (!hasKey) {
            grouped[key] = new Array(person);
        } else {
            grouped[key].push(person);
        }
    }

    return grouped;
}

solve();