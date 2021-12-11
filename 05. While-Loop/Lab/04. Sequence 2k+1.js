function demo(input) {

    let k = Number(input[0]);
    let result = 1;

    while (result <= k) {
        console.log(result);
        result = result * 2 + 1;
    }
}
demo(["3"]);