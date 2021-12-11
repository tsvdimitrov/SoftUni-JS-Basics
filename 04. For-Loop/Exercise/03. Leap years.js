function demo(input) {

    let firstYear = Number(input[0]);
    let lastYaer = Number(input[1]);

    for (let start = firstYear; start <= lastYaer; start += 4) {
        console.log(start);
    }
}
demo(["1908", "1919"]);