'use strict';

class Course {
    constructor(title) {
        this.title = title;
        this._presentations = new Array();
        this._students = new Array();
    }

    get title() {
        return this._title;
    }

    set title(title) {
        if (!/^(\w\s?){1,}$/g.test(title)) {
            throw 'Invlid course title';
        }

        this._title = title;
    }

    get presentations() {
        return this._presentations;
    }

    get students() {
        return this._students;
    }

    addPresentation(presentation) {
        this._presentations.push(presentation);
    }

    addStudent(student) {
        this._students.push(student);
    }
}

module.exports = Course;