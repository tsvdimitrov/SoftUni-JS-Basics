function demo(input) {

    let typeYears = input[0];
    let holidayYears = Number(input[1]);
    let weekendTravelHome = Number(input[2]);

    let numberWeekendSofia = 48 - weekendTravelHome;
    let gameWeekSofia = numberWeekendSofia * 3.0 / 4;

    let gameWeekendHome = weekendTravelHome;
    let gameWeek = holidayYears * 2.0 / 3;

    let result = gameWeek + gameWeekendHome + gameWeekSofia;

    switch (typeYears) {
        case "leap":
            var percent = 0.15;
            result = result + (percent * result);
            console.log(Math.trunc(result));
            break;
        default:
            console.log(Math.trunc(result));
            break;
    }
}
demo(["normal", "3", "2"]); 