'use strict';

function extract(text) {
    let tokens = text.split(' ').map(x => x.trim());

    for (let token of tokens) {
        if (token[token.length - 1] === '.') {
            token = token.substring(0, token.length - 1);
        }

        if (token.includes('@')) {
            let isValid = isValidEmail(token);

            if (isValid) {
                console.log(token);
            }
        }
    }
}

function isValidEmail(email) {
    let [localPart, domain] = email.split('@');

    if (!/^([a-z][a-z.\-_]*)+$/gm.test(localPart)) {
        return false;
    }

    if (!/^([a-z][a-z.]*[a-z0-9])$/gm.test(domain)) {
        return false;
    }

    return true;
}

extract(
    'This is some sample simple@example.com with another very.common@example.com. Just trying to catch an other.email-with-hyphen@example.com or fully-qualified-domain@example.com or admin@mailserver1. Some are invalid Abc.example.com, a"b(c)d,e:f;g<h>i[j\k]l@example.com. This one too just"not"right@example.com.')