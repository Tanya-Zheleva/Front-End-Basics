'use strict';

let femaleFirstNames = ['Ivana', 'Mira', 'Ina', 'Maria', 'Yoana', 'Izabella', 'Katerina', 'Dimana', 'Viktoriya', 'Simona', 'Mikaela', 'Nikol', 'Neli', 'Iva', 'Mihaela', 'Tanya'];
let maleFirstNames = ['Ivo', 'Georgi', 'Petar', 'Marin', 'Alex', 'Stefan', 'Konstantin', 'Yoan', 'Viktor', 'Nikolay', 'Hristo', 'Mario', 'Yordan', 'Martin', 'Angel', 'Kiril'];
let lastNames = ['Ivanov', 'Petrov', 'Dobrev', 'Georgiev', 'Stoyanov', 'Iliev', 'Mihalev', 'Nankov', 'Simeonov', 'Kirov', 'Dimitriev', 'Stratev', 'Kirilov', 'Metodiev'];                       

function generateName(names) {
    let index = Math.floor(Math.random() * names.length);

    return names[index];
}

function generateAge() {
    return Math.floor(Math.random() * 70);
}

function generateGender() {
    let base = Math.floor(Math.random() * 51) % 2;

    return base === 0 ? 'male' : 'female';
}

function getPerson() {
    let gender = generateGender();
    let firstName = '';
    let lastName = '';

    if (gender === 'male') {
        firstName = generateName(maleFirstNames);
        lastName = generateName(lastNames);
    } else {
        firstName = generateName(femaleFirstNames);
        lastName = generateName(lastNames) + 'a';
    }

    let age = generateAge();
    let person = createPerson(firstName, lastName, age, gender);

    return person;
}

function createPerson(firstName, lastName, age, gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        toString: () => {
            return `${firstName} ${lastName} ${age} ${gender}`
        }
    };
}

function generatePeople(count = 15) {
    let people = new Array();

    for (let i = 0; i < count; i++) {
        let person = getPerson();
        people.push(person);
    }

    return people;
}

//console.log(getPerson().toString());

module.exports = {
    getPeople: generatePeople
};