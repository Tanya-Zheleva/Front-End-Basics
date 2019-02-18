'use strict';

function solve() {
    return function (selector) {
        if (!selector) {
            throw 'No selector is provided';
        }

        if (typeof selector !== 'string' && !(selector instanceof Element)) {
            throw 'Selector type must be a string or a DOM element';
        }

        let found = null;

        if (selector instanceof Element) {
            found = selector;
        } else {
            found = document.getElementById(selector);
        }

        if (!found) {
            throw 'No such selector found';
        }

        let items = found.querySelectorAll('.button, .content');
        let length = items.length;

        for (let i = 0; i < length - 1; i++) {
            if (items[i].className === 'button') {
                items[i].textContent = 'hide';

                if (i + 1 < length && items[i + 1].className === 'content') {
                    items[i].addEventListener('click', function () {
                        let content = items[i + 1];

                        if (content.style.display !== 'none') {
                            content.style.display = 'none';
                            this.textContent = 'show';
                        } else {
                            content.style.display = 'block';
                            this.textContent = 'hide';
                        }
                    });
                }
            }
        }
    };
};

module.exports = solve;