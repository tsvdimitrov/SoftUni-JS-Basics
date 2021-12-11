function demo(input) {

    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let sumOfToys = 0;
    let sumOfMoney = 0;
    let currentMoney = 10;

    for (i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sumOfMoney += currentMoney;
            sumOfMoney -= 1;
            currentMoney += 10;
        } else {
            sumOfToys++;
        }
    }
    sumOfMoney += sumOfToys * toyPrice;

    if (sumOfMoney >= washingMachine) {
        console.log(`Yes! ${(sumOfMoney - washingMachine).toFixed(2)}`);
    } else {
        let result = Math.abs(washingMachine - sumOfMoney);
        console.log(`No! ${result.toFixed(2)}`);
    }
}
demo(["21", "1570.98", "3"]);