"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var presentation_1 = require("./presentation");
var homework_1 = require("./homework");
var course_1 = require("./course");
try {
    var homeworks = new Array();
    homeworks.push(new homework_1.Homework('H1'));
    homeworks.push(new homework_1.Homework('H662'));
    homeworks.push(new homework_1.Homework('H11'));
    homeworks.push(new homework_1.Homework('H'));
    var presentations = new Array();
    for (var i = 0; i < 4; i++) {
        presentations.push(new presentation_1.Presentation('T' + i + 1, homeworks[i]));
    }
    var course_2 = new course_1.Course();
    course_2.init('test', presentations);
    var students = ['Petar Mihailov', 'Ivan Kostadinov', 'Mihaela Ivanova', 'Ina Georgieva'];
    students.forEach(function (x) { return course_2.addStudent(x); });
    course_2.submitHomework(5, 2);
    course_2.submitHomework(3, 1);
    var examResults = [
        { 3: 21 },
        { 5: 15 },
        { 7: 20 },
        { 4: 10 },
    ];
    course_2.pushExamResults(examResults);
    console.log(course_2.getAllStudents());
    console.log(course_2.getTopStudents());
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=main.js.map