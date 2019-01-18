'use strict';

function findSum(args, sum) {
    let numbers = args.map(x => Number(x));

    for (let i = 0; i < numbers.length - 1; i++) {
        let sumTokens = [numbers[i]];
        let currentSum = numbers[i];

        for (let k = i + 1; k < numbers.length; k++) {
            if (currentSum + numbers[k] <= sum) {
                currentSum += numbers[k];
                sumTokens.push(numbers[k]);

                if (currentSum === sum) {
                    return sumTokens.join(', ');
                }
            }
        }
    }
}

let tokens = findSum(['4', '3', '1', '4', '2', '5', '8'], 11);
console.log(tokens);