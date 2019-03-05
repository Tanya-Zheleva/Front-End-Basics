'use strict';

class Homework {
    constructor(content) {
        this._content = content;
        this._id = this._content.length % 7;
    }

    get content() {
        return this._content;
    }

    get id() {
        return this._id;
    }
}

module.exports = Homework;