function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fisherMan = input[2];
    let finalMoney = 0;

    switch (season) {
        case "Spring":
            finalMoney = 3000;
            if (fisherMan <= 6) {
                finalMoney = finalMoney - (finalMoney * 0.10);

            } else if (fisherMan > 7 && fisherMan <= 11) {
                finalMoney = finalMoney - (finalMoney * 0.15);
            } else {
                finalMoney = finalMoney - (finalMoney * 0.25);
            }
            break;
        case "Summer":
        case "Autumn":
            finalMoney = 4200;
            if (fisherMan <= 6) {
                finalMoney = finalMoney - (finalMoney * 0.10);

            } else if (fisherMan > 7 && fisherMan <= 11) {
                finalMoney = finalMoney - (finalMoney * 0.15);
            } else {
                finalMoney = finalMoney - (finalMoney * 0.25);
            }
            break;
        default:
            finalMoney = 2600;
            if (fisherMan <= 6) {
                finalMoney = finalMoney - (finalMoney * 0.10);
            } else if (fisherMan > 7 && fisherMan <= 11) {
                finalMoney = finalMoney - (finalMoney * 0.15);
            } else {
                finalMoney = finalMoney - (finalMoney * 0.25);
            }
            break;
    }

    if (fisherMan % 2 === 0 && season !== "Autumn") {
        finalMoney = finalMoney - (finalMoney * 0.05);
    }

    if (budget >= finalMoney) {
        console.log(`Yes! You have ${(budget - finalMoney).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(finalMoney - budget).toFixed(2)} leva.`);
    }
}
demo(["3000",
    "Summer",
    "11"]);
