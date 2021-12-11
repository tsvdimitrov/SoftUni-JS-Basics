function solve(input) {

    let ourNumber = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${ourNumber} = ${i * ourNumber}`);
    }
}
solve(["5"]);