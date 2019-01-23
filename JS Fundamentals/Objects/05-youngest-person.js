'use strict';

function getYoungestPerson(args) {
    let people = new Array();

    for (let i = 0; i < args.length; i+=3) {
        let person = createPerson(args[i], args[i + 1], args[i + 2]);
        people.push(person);
    }

    let youngest = people.sort((a, b) => {
        return a.age - b.age;
    })[0];

    console.log(`${youngest.firstName} ${youngest.lastName}`);
}

function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
}

getYoungestPerson([
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42']);

getYoungestPerson([
    'Penka', 'Hristova', '61',
    'System', 'Failiure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72']);