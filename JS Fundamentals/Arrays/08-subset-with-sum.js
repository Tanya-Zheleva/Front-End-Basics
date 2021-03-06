'use strict';

function findSubset(args, sum) {
    let numbers = args.map(x => Number(x));

    for (let i = 0; i < numbers.length - 1; i++) {
        let sumTokens = [numbers[i]];
        let currentSum = numbers[i];

        for (let k = i + 1; k < numbers.length; k++) {
            if (currentSum + numbers[k] <= sum) {
                currentSum += numbers[k];
                sumTokens.push(numbers[k]);

                if (currentSum === sum) {
                    return true;
                }
            }
        }
    }

    return false;
}

console.log(findSubset(['2', '1', '2', '4', '3', '5', '2', '6'], 14));