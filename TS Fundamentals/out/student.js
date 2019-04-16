"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._id = this._firstName.length % 9;
        this._submittedHomeworks = 0;
        this._score = 0;
    }
    Object.defineProperty(Student.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (!/^[A-Z][a-z]*$/g.test(value)) {
                throw 'Invalid student first name';
            }
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            if (!/^[A-Z][a-z]*$/g.test(value)) {
                throw 'Invalid studnet last name';
            }
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "submittedHomeworks", {
        get: function () {
            return this._submittedHomeworks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.addScore = function (score) {
        this._score += score;
    };
    Student.prototype.submitHomework = function () {
        this._submittedHomeworks++;
    };
    Student.prototype.toString = function () {
        return "{firstName: " + this.firstName + ", lastName: " + this.lastName + ", id: " + this.id + "},  hws: " + this.submittedHomeworks + ", score: " + this.score;
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=student.js.map