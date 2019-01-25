'use strict';

function findPerson() {
    let people = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
        { firstname: 'Bay', lastname: 'Ivan', age: 10 },
        { firstname: 'John', lastname: 'Doe', age: 42 },
        { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
        { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
        { firstname: 'Gosho', lastname: 'Gosho', age: 29 },
        { firstname: 'Ivan', lastname: 'Georgiev', age: 18 },
    ];

    let areAllTheSameAge = people.every(x => x.age === 18);
    console.log(areAllTheSameAge);
}

findPerson();