'use strict';

function sort(args) {
    let first = Number(args[0]);
    let second = Number(args[1]);
    let third = Number(args[2]);

    if (first < second) {
        let t = first;
        first = second;
        second = t;

        if (first < third) {
            t = first;
            first = third;
            third = t;
        }

        if (second < third) {
           t = second;
           second = third;
           third = t;
        }
    }

    if (first < third) {
        let t = first;
        first = third;
        third = t;

        if (second < third) {
            t = second;
            second = third;
            third = t;
        }
    }

    if (second <= first && second < third) {
        let t = second;
        second = third;
        third = t;
    }

    console.log(`${first} ${second} ${third}`);
}

sort(['10', '20', '30']);