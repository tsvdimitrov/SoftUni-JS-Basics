function demo(input) {

    let days = Number(input[0]);
    let typeRoom = input[1];
    let grade = input[2];
    let result = 0;
    days = days - 1;

    if (days < 10) {
        switch (typeRoom) {
            case "room for one person": result = days * 18.00; break;
            case "apartment":
                result = days * 25.00;
                result = result * 0.70;
                break;
            case "president apartment":
                result = days * 35.00;
                result = result * 0.90;
                break;
        }
    } else if (days >= 10 && days <= 15) {
        switch (typeRoom) {
            case "room for one person": result = days * 18.00; break;
            case "apartment":
                result = days * 25.00;
                result = result * 0.65;
                break;
            case "president apartment":
                result = days * 35.00;
                result = result * 0.85;
                break;
        }

    } else {
        switch (typeRoom) {
            case "room for one person": result = days * 18.00; break;
            case "apartment":
                result = days * 25.00;
                result = result * 0.50;
                break;
            case "president apartment":
                result = days * 35.00;
                result = result * 0.80;
                break;
        }
    }
    if (grade === 'positive') {
        result = result * 1.25;
    } else {
        result = result * 0.90;
    }
    console.log(result.toFixed(2));
}
demo(["14",
    "apartment",
    "positive"])

