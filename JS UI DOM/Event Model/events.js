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
        let contents = found.getElementsByClassName('content');


        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = 'hide';

            buttons[i].addEventListener('click', function() {
                console.log('clicked');
            });        
        }

    };
};

module.exports = solve;