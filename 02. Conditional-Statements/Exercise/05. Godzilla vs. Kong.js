function demo(input) {

    let budget = Number(input[0]);
    let statitsCount = Number(input[1]);
    let priceForOne = Number(input[2]);

    let priceForAllStatists = statitsCount * priceForOne;
    let decorPrice = budget * 0.1;

    if (statitsCount > 150) {
        priceForAllStatists = priceForAllStatists * 0.9;
    }
    let total = decorPrice + priceForAllStatists;

    if (total > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);
    }
}
demo(["20000", "120", "55.5"]);