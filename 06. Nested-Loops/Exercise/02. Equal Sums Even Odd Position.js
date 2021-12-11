function demo(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let buffer = "";

    for (let i = a; i <= b; i++) {
        let textNum = "" + i;
        let sumOdd = 0;
        let sumEven = 0;
        for (let z = 0; z < textNum.length; z++) {
            if ((z + 1) % 2 === 0) {
                sumEven += Number(textNum[z]);
            } else {
                sumOdd += Number(textNum[z]);
            }

        }
        if (sumEven === sumOdd) {
            buffer += textNum + " ";

        }
    }
    console.log(buffer);
}
demo(["100000",
    "100050"]);