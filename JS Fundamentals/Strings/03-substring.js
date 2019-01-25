'use strict';

function countSubstrings(args) {
    let substring = args[0];
    let string = args[1];

    let regex = new RegExp("(" + substring + ")", "gmi");
    let matches = string.match(regex);

    console.log(matches.length);
}

countSubstrings([
	'in',
	'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
])