function solve(args) {
    let digit = Math.floor(Number(args[0]) / 100) % 10;

    if (digit === 7) {
        console.log(true);       
    } else {
        console.log(`false ${digit}`);
    }
}

solve(['123456']);