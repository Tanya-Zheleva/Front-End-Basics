'use strict';

function findPalindromes(text) {
    let tokens = text.split(/[\s,."!]+/).filter(x => x !== '');
    
    for (let token of tokens) {
        if (isPalindrome(token)) {
            console.log(token);
        }
    }
}

function isPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i])
        return false;
    }

    return true;
}

findPalindromes('Test, ABBA abcx aba, lamal. qwertyytrewq, sample, "another"');