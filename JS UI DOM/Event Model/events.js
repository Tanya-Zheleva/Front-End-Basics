'use strict';

function solve() {
    return function (selector) {
        if (arguments.length === 0) {
            throw 'No selector is provided';
        }

        if (typeof selector !== 'string') {
            throw 'Selector type must be a string';
        }

        let byId = document.getElementById(selector);
        let byElement = document.getElementsByTagName(selector);

        if (byId === null && byElement === undefined) {
            throw 'Invalid selector';
        }

        let found = byId !== null ? byId : byElement;
        let buttons = found.getElementsByClassName('button');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].textContent = 'hide';

            buttons[i].addEventListener('click', function () {
                let child = found.childNodes[0];

                while (child !== null) {
                    if (child.className === 'content') {
                        if (child.style.display !== 'none') {
                            child.style.display = 'none';
                            this.textContent = 'show';
                        } else {
                            child.style.display = 'block';
                            this.textContent = 'hide';
                        }

                        break;
                    }

                    child = child.nextSibling;
                }
            });
        }
    };
};

module.exports = solve;