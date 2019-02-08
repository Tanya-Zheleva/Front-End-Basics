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

        console.log('ok');
    };
};

module.exports = solve;