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
        for (let i = 0; i < data.length; i++) {
            this.insert(this._length, data[i]);
        }

        return this;
    }

    prepend(...data) {
        for (let i = data.length - 1; i >= 0; i--) {
            this.insert(0, data[i]);
        }

        return this;
    }

    at(index, data = null) {
        let counter = 0;
        let current = this._first;

        while (current) {
            if (counter === index) {
                if (!data) {
                    return current;
                }

                current.data = data;
            }

            counter++;
            current = current.next;
        }
    }

    insert(index, ...data) {
        let start = 0;

        if (!this._first) {
            this._first = new ListNode(data[0]);
            this._last = this._first;

            this._length++;
            start = 1;
        }

        if (index === 0) {
                for (let i = data.length - 1; i >= start; i--) {
                let node = new ListNode(data[i]);

                node.next = this._first;
                this._first = node;
                this._length++;
            }

            return this;
        }

            for (let i = data.length - 1; i >= start; i--) {
            let previous = this.at(index - 1);
            let node = new ListNode(data[i]);

            node.next = previous.next;
            previous.next = node;
            this._length++;
        }

        return this;
    }

    removeAt(index) {
        if (index === 0) {
            let node = this._first;
            this._first = this._first.next;
            this._length--;

            return node;
        }

        let node = this.at(index);
        let previous = this.at(index - 1);
        previous.next = node.next;
        this._length--;

        return node;
    }

    toArray() {
        return [...this];
    }

    toString() {
        return this.toArray().join(' -> ');
    }
}

module.exports = LinkedList;