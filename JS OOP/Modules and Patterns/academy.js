'use strict';

const Course = require('./course.js');
const Presentation = require('./presentation.js');
const Homework = require('./homework.js');
const Student = require('./student.js');

function solve() {
    let course;

    let Academy = {
        init: function (title, presentations) { //an array of objects title + hw
            if (arguments.length < 2) {
                throw 'Invalid course arguments';
            }

            course = new Course(title);

            for (let i = 0; i < presentations.length; i++) {
                const current = presentations[i];
                let hw = new Homework(current.hw);

                let presentation = new Presentation(current.title, hw);
                course.addPresentation(presentation);
            }
        },
        addStudent: function (name) {
            let [firstName, lastName] = name.split(/\s+/g);
            let student = new Student(firstName, lastName);
            course.addStudent(student);

            return student.id;
        },
        getAllStudents: function () {
            return course.students.map(x => `{firstName: ${x.firstName}, lastName: ${x.lastName}, id: ${x.id}}, hws: ${x.submittedHomeworks}, score: ${x.score}`);
        },
        submitHomework: function (studentID, homeworkID) {
            if (!course.students.some(x => x.id === studentID)) {
                throw `No student with id ${studentID} found`;
            }

            if (!course.presentations.some(x => x.homework.id === homeworkID)) {
                throw `No homework with id ${homeworkID} found`;
            }

            let student = course.students.find(x => x.id === studentID);
            student.submitHomework();
        },
        pushExamResults: function (results) {
            let allKeys = results.map(x => Object.keys(x)[0]);
            let uniqueKeys = new Set(allKeys);

            if (allKeys.length !== uniqueKeys.size) {
                throw 'Each student id must be used only once';
            }

            results.forEach((item, index) => {
                let key = allKeys[index];

                if (!course.students.some(x => `${x.id}` === key)) {
                    throw `No student with id ${key} found`;
                }

                if (typeof item[key] !== 'number') {
                    throw 'Exam scores must be numbers';
                }
            });

            for (let i = 0; i < results.length; i++) {
                const current = results[i];
                const key = allKeys[i];

                let student = course.students.find(x => `${x.id}` === key);
                student.addScore(current[key]);
            }
        },
        getTopStudents: function () {
            const studentsToBeListed = 10;
            const examPercent = 0.75;

            let homeworks = course.presentations.length;
            let studentsToShow = course.students.length <= studentsToBeListed
                ? course.students.length :
                studentsToBeListed;

            let sorted = course.students.sort((a, b) => {
                let firstScore = Math.floor((a.score * examPercent) + (a.submittedHomeworks / homeworks));
                let secondScore = Math.floor((b.score * examPercent) + (b.submittedHomeworks / homeworks));

                return secondScore - firstScore;
            })
                .map(x => `${x.firstName} ${x.lastName}, exam score: ${Math.floor((x.score * examPercent) + (x.submittedHomeworks / homeworks))}`)
                .slice(0, studentsToShow);

            return sorted;
        },
        test: function () {
            console.log(course.presentations.map(x => `${x.homework} ${x.homework.id}`));
        }
    };

    return Academy;
}

module.exports = solve;