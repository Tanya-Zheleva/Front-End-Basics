'use strict';

function solve(selector) {
    if (!selector) {
        throw 'No selector is provided';
    }

    if (typeof selector !== 'string' && typeof selector !== 'object') {
        throw 'Selector type must be a string or a jQuery element';
    }

    let items = null;

    if (typeof selector === 'object') {
        if (!selector.length) {
            throw 'jQuery object not found';
        }

        items = selector.find('.content, .button');
    } else {
        if (!$(selector).length) {
            throw 'Selector not found';
        }

        items = $(selector).find('.content, .button');
    }

    let length = items.length;

    items.each(function (index, element) {
        let current = $(element);

        if (current.hasClass('button')) {
            current.text('hide');

            if (index + 1 < length && $(items[index + 1]).hasClass('content')) {
                current.on('click', function () {
                    let content = $(items[index + 1]);

                    if (content.css('display') !== 'none') {
                        current.text('show');
                    } else {
                        current.text('hide');
                    }

                    content.toggle();
                });
            }
        }
    });
}