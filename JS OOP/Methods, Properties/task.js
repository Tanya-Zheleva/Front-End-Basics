'use strict';

const LinkedList = require('./linked-list.js');

let list = new LinkedList();
//list.append(1, 2, 3).append(4);
//list.append(4, 5, 6).prepend(1, 2, 3);
//list.append(1, 4, 5).insert(1, 2, 3);

list.append(1, 2, 3, 4, 5, 6);
console.log(list.at(2).data); // 3

list.at(2, 'gosho');
console.log(list.at(2).data); // gosho


const removed = list.append(1, 2, 3, 4, 5).removeAt(1);
console.log(removed.data);


console.log(list.toString());