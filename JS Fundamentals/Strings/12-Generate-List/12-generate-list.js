'use strict';

function generate(people) {
    let ul = document.createElement('ul');

    for (let person of people) {
        let li = document.createElement('li');

        let strong = document.createElement('strong');
        let name = document.createTextNode(person.name);
        strong.appendChild(name);

        let span = document.createElement('span');
        let age = document.createTextNode(` ${person.age}`);
        span.appendChild(age);

        li.appendChild(strong);
        li.appendChild(span);
        ul.appendChild(li);
    }

    document.getElementById('list-item').appendChild(ul);
}

generate([
    { name: 'Peter', age: 14 },
    { name: 'Iva', age: 19 },
    { name: 'Gosho', age: 25 },
    { name: 'Mira', age: 30 },
    { name: 'Kamen', age: 5 },
]);