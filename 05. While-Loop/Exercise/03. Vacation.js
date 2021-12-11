function demo(input) {

    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let countSpendetMoney = 0;
    let countDays = 0;

    while (money < moneyNeeded) {
        let moneyUsed = input[index];
        index++;
        let sum = Number(input[index]);
        index++;

        switch (moneyUsed) {
            case 'spend':
                countSpendetMoney++;
                money -= sum;
                if (money < 0) {
                    money = 0
                }
                break;
            case 'save':
                money += sum;
                countSpendetMoney = 0;
                break;
        }
        countDays++;
        if (countSpendetMoney == 5) {
            break;
        }
    }

    if (money >= moneyNeeded) {
        console.log(`You saved the money for ${countDays} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(`${countDays}`);
    }
}
demo(["2000", "1000", "spend", "1200", "save", "2000"]);
