'use strict';

function replaceWithRegex(matches, string) {
    for (let match of matches) {
        let regex = new RegExp(/<(.*?)>(.*?)</, 'gm');
        let found = regex.exec(match);
        let type = found[1];
        let value = found[2];

        if (type === 'upcase') {
            value = value.toUpperCase();
        } else if (type === 'lowcase') {
            value = value.toLowerCase();
        }

        string = string.replace(match, value);
    }

    return string;
}

function parseTags(args) {
    let string = args[0];

    let upcaseMatches = string.match(/(<(upcase)>(.*?)<\/upcase>)/gm);
    let lowcaseMatches = string.match(/(<(lowcase)>(.*?)<\/lowcase>)/gm)
    let normalMatches = string.match(/(<(orgcase)>(.*?)<\/orgcase>)/gm);

    string = replaceWithRegex(upcaseMatches, string);
    string = replaceWithRegex(lowcaseMatches, string);
    string = replaceWithRegex(normalMatches, string);

    console.log(string);
}

parseTags([
    'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.'
]);

parseTags([
    'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>ANYTHING</lowcase> else.'
]);