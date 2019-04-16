"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var Course = /** @class */ (function () {
    function Course() {
        this._presentations = new Array();
        this._students = new Array();
    }
    Object.defineProperty(Course.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (!/^(\w\s?){1,}$/g.test(value)) {
                throw 'Invlid course title';
            }
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "presentations", {
        get: function () {
            return this._presentations;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: true,
        configurable: true
    });
    Course.prototype.init = function (title, presentations) {
        this.title = title;
        this._presentations = presentations;
    };
    Course.prototype.addStudent = function (fullName) {
        var _a = fullName.split(/\s+/g), firstName = _a[0], lastName = _a[1];
        var student = new student_1.Student(firstName, lastName);
        this._students.push(student);
        return student.id;
    };
    Course.prototype.getAllStudents = function () {
        return this._students.map(function (x) { return x.toString(); });
    };
    Course.prototype.submitHomework = function (studentID, homeworkID) {
        if (!this._students.some(function (x) { return x.id === studentID; })) {
            throw "No student with id " + studentID + " found";
        }
        if (!this._presentations.some(function (x) { return x.homework.id === homeworkID; })) {
            throw "No homework with id " + homeworkID + " found";
        }
        var student = this._students.filter(function (x) { return x.id === studentID; })[0];
        student.submitHomework();
    };
    Course.prototype.pushExamResults = function (results) {
        var _this = this;
        var allKeys = results.map(function (x) { return Object.keys(x)[0]; });
        var uniqueKeys = this.extractUnique(allKeys);
        if (allKeys.length !== uniqueKeys.length) {
            throw 'Each student id must be used only once';
        }
        results.forEach(function (item, index) {
            var key = allKeys[index];
            if (!_this._students.some(function (x) { return "" + x.id === key; })) {
                throw "No student with id " + key + " found";
            }
            if (typeof item[key] !== 'number') {
                throw 'Exam scores must be numbers';
            }
        });
        var _loop_1 = function (i) {
            var current = results[i];
            var key = allKeys[i];
            var student = this_1._students.filter(function (x) { return "" + x.id === key; })[0];
            student.addScore(current[key]);
        };
        var this_1 = this;
        for (var i = 0; i < results.length; i++) {
            _loop_1(i);
        }
    };
    Course.prototype.getTopStudents = function () {
        var studentsToBeListed = 10;
        var examPercent = 0.75;
        var homeworks = this._presentations.length;
        var studentsToShow = this._students.length <= studentsToBeListed ?
            this._students.length :
            studentsToBeListed;
        var sorted = this._students
            .sort(function (a, b) {
            var firstScore = Math.floor((a.score * examPercent) + (a.submittedHomeworks / homeworks));
            var secondScore = Math.floor((b.score * examPercent) + (b.submittedHomeworks / homeworks));
            return secondScore - firstScore;
        })
            .map(function (x) { return x.firstName + " " + x.lastName + ", exam score: " + Math.floor((x.score * examPercent) + (x.submittedHomeworks / homeworks)); })
            .slice(0, studentsToShow);
        return sorted;
    };
    Course.prototype.extractUnique = function (keys) {
        var unique = new Array();
        var _loop_2 = function (i) {
            if (!unique.some(function (x) { return x === keys[i]; })) {
                unique.push(keys[i]);
            }
        };
        for (var i = 0; i < keys.length; i++) {
            _loop_2(i);
        }
        return unique;
    };
    return Course;
}());
exports.Course = Course;
//# sourceMappingURL=course.js.map