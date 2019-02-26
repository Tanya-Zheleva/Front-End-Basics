'use strict';

const ListNode = require('./list-node.js');

class LinkedList {
    constructor() {
        this._length = 0;
        this._first = null;
        this._last = null;
    }

    *[Symbol.iterator]() {
        let current = this._first;
        while (current) {
            yield current.data;
            current = current.next;
        }
    }


    append(...data) {
        let index = 0;

        if (this._first === null) {
            this._first = new ListNode(data[0]);
            this._last = this._first;

            this._length++;
            index = 1;
        }

        for (let i = index; i < data.length; i++) {
            let node = new ListNode(data[i]);
            this._last.next = node;
            this._last = this._last.next;

            this._length++;
        }

        return this;
    }

    prepend(...data) {
        let index = 0;

        if (this._first === null) {
            this._first = new ListNode(data[0]);
            this._last = this._first;

            this._length++;
            index = 1;
        }

        for (let i = index; i < data.length; i++) {
            let node = new ListNode(data[i]);
            node.next = this._first;
            this._first = node;

            this._length++;
        }

        return this;
    }

    toArray() {
        return [...this];
    }

    toString() {
        return [...this].join(' -> ');
    }
}

module.exports = LinkedList;