function solve(args) {
    let width = Number(args[0]);
    let height = Number(args[1]);

    let area = width * height;
    let perimeter = 2 * (width + height);

    console.log(`${area.toFixed(2)} ${perimeter.toFixed(2)}`);
}

solve(['5.3', '1']);