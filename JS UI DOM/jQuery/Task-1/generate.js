'use strict';

function createList(selector, count) {
    if (!(selector && count)) {
        throw 'Invalid arguments';
    }

    if (typeof count === 'string') {
        if (!/^-?\d+$/g.test(count)) {
            throw 'Count must be a number';
        }

        count = Number(count);
    }

    if (count < 1) {
        throw 'Count must be greater than 0';
    }

    let ul = $('<ul>').addClass('items-list');

    for (let i = 0; i < count; i++) {
        let li = $('<li>')
            .addClass('list-item')
            .text(`List item #${i}`);
        ul.append(li);
    }

    console.log(selector);
    $(selector).append(ul);
}