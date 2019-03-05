'use strict';

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._id = this._firstName.length % 9;
        this._submittedHomeworks = 0;
        this._score = 0;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        if (!/^[A-Z][a-z]*$/g.test(firstName)) {
            throw 'Invalid student first name';
        }

        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        if (!/^[A-Z][a-z]*$/g.test(lastName)) {
            throw 'Invalid studnet last name';
        }

        this._lastName = lastName;
    }

    get id() {
        return this._id;
    }

    get submittedHomeworks() {
        return this._submittedHomeworks;
    }

    get score() {
        return this._score;
    }

    addScore(score) {
        this._score += score;
    }

    submitHomework() {
        this._submittedHomeworks++;
    }
}

module.exports = Student;