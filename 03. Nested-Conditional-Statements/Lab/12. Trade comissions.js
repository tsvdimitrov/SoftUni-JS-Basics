function demo(input) {

    let town = input[0];
    let s = Number(input[1]);
    let result = 0;

    if (town === 'Sofia') {
        if (s >= 0 && s <= 500) {
            result = s * 0.05;
        } else if (s > 500 && s <= 1000) {
            result = s * 0.07;
        } else if (s > 1000 && s <= 10000) {
            result = s * 0.08;
        } else if (s > 10000) {
            result = s * 0.12;
        }
    } else if (town === 'Varna') {
        if (s >= 0 && s <= 500) {
            result = s * 0.045;
        } else if (s > 500 && s <= 1000) {
            result = s * 0.075;
        } else if (s > 1000 && s <= 10000) {
            result = s * 0.10;
        } else if (s > 10000) {
            result = s * 0.13;
        }
    } else if (town === 'Plovdiv') {
        if (s >= 0 && s <= 500) {
            result = s * 0.055;
        } else if (s > 500 && s <= 1000) {
            result = s * 0.08;
        } else if (s > 1000 && s <= 10000) {
            result = s * 0.12;
        } else if (s > 10000) {
            result = s * 0.145;
        }
    }

    if ((town !== "Sofia" && town !== "Varna" && town !== "Plovdiv") || s < 0) {
        console.log('error')
    } else {
        console.log(result.toFixed(2));
    }
}
demo(["Sofia",
    "1500"])


