'use strict';

function replaceTags(args) {
    let string = args[0];
    let regex = new RegExp(/(<a href="(.*?)">(.*?)<\/a>)/, 'gm');

    let matches = regex.exec(string);

    while (matches) {
        let data = `[${matches[3]}](${matches[2]})`;
        string = string.replace(matches[1], data);

        matches = regex.exec(string);
    }

    console.log(string);
}
replaceTags([
    '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>'
]);