function solve(args) {
    let number = Number(args[0]);
    let canDivide = number % 35 === 0;

    if (canDivide) {
        console.log(`${canDivide} ${number}`); 
    } else {
        console.log(`${canDivide} ${number}`);
    }
}

solve(['70']);