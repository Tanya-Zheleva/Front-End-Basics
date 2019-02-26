'use strict';

const LinkedList = require('./linked-list.js');

let list = new LinkedList();
list.append(2, 3, 4).append(1, 13);
list.prepend(10, 23).prepend(47);

let arr = list.toArray();
console.log(arr);
console.log(arr instanceof Array);

for (const item of list) {
    console.log(item);
}

console.log(list.toString());