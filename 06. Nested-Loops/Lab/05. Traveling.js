function demo(input) {

    let index = 0;
    let inputLine = input[index++];

    while (inputLine !== "End") {
        let minBudgetNeeded = Number(input[index++]);
        let savedSum = 0;

        while (savedSum <= minBudgetNeeded) {
            let currentSavedSum = Number(input[index++]);
            savedSum += currentSavedSum;
            if (savedSum >= minBudgetNeeded) {
                console.log(`Going to ${inputLine}!`);
                break;
            } else { }
        }
        inputLine = input[index++];
    }
}
demo(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);