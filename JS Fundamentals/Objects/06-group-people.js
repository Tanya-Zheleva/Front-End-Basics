'use strict';

Array.prototype.groupBy = function (prop) {
    return this.reduce(function (groups, item) {
        let value = item[prop]
       
        groups[value] = groups[value] || []
        groups[value].push(item)
       
        return groups
    }, {})
};

function solve(params) {
    let people = [
        { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
        { firstname: 'Bay', lastname: 'Ivan', age: 81 },
        { firstname: 'John', lastname: 'Doe', age: 42 },
        { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
        { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
        { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
    ];

    let byAge = people.groupBy('age');
    console.log(byAge);
}

solve();