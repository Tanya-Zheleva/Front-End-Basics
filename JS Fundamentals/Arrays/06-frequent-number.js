'use strict';

function getMostFrequentNumber(array) {
    let diagram = new Map();

    for (let i = 0; i < array.length; i++) {
        if (!diagram.has(array[i])) {
            diagram.set(array[i], 1);
        } else {
            let oldValue = diagram.get(array[i]);
            diagram.set(array[i], oldValue + 1);
        }       
    }

    let mostFrequentKey = '';
    let mostFrequentValue = 0;

    for (let [key, value] of diagram) {
        if (value > mostFrequentValue) {
            mostFrequentValue = value;
            mostFrequentKey = key;
        }
    }

    let times = mostFrequentValue == 1 ? 'time' : 'times';

    console.log(`${mostFrequentKey} (${mostFrequentValue} ${times})`);
}

getMostFrequentNumber(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']);
getMostFrequentNumber(['13', '4', '1']);