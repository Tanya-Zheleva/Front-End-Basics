'use strict';

function sort(args) {
    let array = args.map(x => Number(x));

    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
               min = j; 
            }        
        }

        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    console.log(array.join('\n'));
}

sort(['6', '3', '4', '1', '5', '2', '6', '-5', '-6.2', '-0.3']);
