function demo(input) {

    let number = Number(input[0]);

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    console.log(factorial);
}
demo(["4"]);