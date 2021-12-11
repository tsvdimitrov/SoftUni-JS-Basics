function demo(input) {

    let fruit = input[0];
    let day = input[1];
    let num = Number([input[2]]);
    let validPrice = false;
    let price = 0;

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (fruit == "banana") {
            price = num * 2.50;
            validPrice = true;
        }
        else if (fruit == "apple") {
            price = num * 1.20;
            validPrice = true;
        }
        else if (fruit == "orange") {
            price = num * 0.85;
            validPrice = true;
        }
        else if (fruit == "grapefruit") {
            price = num * 1.45;
            validPrice = true;
        }
        else if (fruit == "kiwi") {
            price = num * 2.70;
            validPrice = true;
        }
        else if (fruit == "pineapple") {
            price = num * 5.50;
            validPrice = true;
        }
        else if (fruit == "grapes") {
            price = num * 3.85;
            validPrice = true;
        }
    }
    else if (day == "Saturday" || day == "Sunday") {
        if (fruit == "banana") {
            price = num * 2.70;
            validPrice = true;
        }
        else if (fruit == "apple") {
            price = num * 1.25;
            validPrice = true;
        }
        else if (fruit == "orange") {
            price = num * 0.90;
            validPrice = true;
        }
        else if (fruit == "grapefruit") {
            price = num * 1.60;
            validPrice = true;
        }
        else if (fruit == "kiwi") {
            price = num * 3.00;
            validPrice = true;
        }
        else if (fruit == "pineapple") {
            price = num * 5.60;
            validPrice = true;
        }
        else if (fruit == "grapes") {
            price = num * 4.20;
            validPrice = true;
        }
    }

    if (validPrice == false) {
        console.log("error");
    }
    else if (validPrice == true) {
        console.log(price.toFixed(2));
    }

}
demo(["apple",
    "Saturday",
    "2"])