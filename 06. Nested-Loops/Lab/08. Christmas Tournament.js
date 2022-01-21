function demo(input) {

    let n = Number(input.shift());
    let dayWin = 0;
    let dayLose = 0;
    let total = 0;

    for (let i = 1; i <= n; i++) {
        let currentLine = input.shift();
        let currentMoney = 0;
        let win = 0;
        let lose = 0;

        while (currentLine !== 'Finish') {
            sport = currentLine;
            result = input.shift();

            if (result === "win") {
                currentMoney += 20;
                win++;

            } else if (result === "lose") {
                lose++;
            }

            currentLine = input.shift();
        }
        if (win > lose) {
            
            total += currentMoney * 1.10;
            dayWin++;
        } else {
            total += currentMoney;
            dayLose++;
        }
    }


    if (dayWin > dayLose) {
        total *= 1.2;
        console.log("You won the tournament! Total raised money: " + total.toFixed(2));
    } else {
        console.log("You lost the tournament! Total raised money: " + total.toFixed(2));
    }
}
demo(["2",
    "volleyball",
    "win",

    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);