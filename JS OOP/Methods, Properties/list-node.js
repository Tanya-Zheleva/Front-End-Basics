'use strict'

class ListNode {
    constructor(data, next) {
        this._data = data || null;
        this._next = next || null; 
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get next() {
        return this._next;
    }

    set next(value) {
        this._next = value;
    }
}

module.exports = ListNode;