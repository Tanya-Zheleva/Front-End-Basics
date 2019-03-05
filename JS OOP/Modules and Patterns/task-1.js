'use strict';

const func = require('./academy.js');

let academy = func();

try {
    let presentations = [
        { title: 'T1', hw: 'H1' },
        { title: 'T2', hw: 'H662' },
        { title: 'T3', hw: 'H11' },
        { title: 'T5', hw: 'H' },
    ]

    academy.init('test', presentations);
    //academy.test();

    let students = ['Petar Mihailov', 'I5n Kostadinov', 'Mihaela Ivanova', 'Ina Georgieva'];

    students.forEach(x => academy.addStudent(x));
    academy.getAllStudents();

    academy.submitHomework(5, 2);
    academy.submitHomework(3, 1);
    
    let examResults = [
        { 3: 21 },
        { 5: 15 },
        { 7: 20 },
        { 4: 10 },
    ];
    
    academy.pushExamResults(examResults);
    console.log(academy.getAllStudents());
    console.log(academy.getTopStudents());
} catch (error) {
    console.log(error);
}