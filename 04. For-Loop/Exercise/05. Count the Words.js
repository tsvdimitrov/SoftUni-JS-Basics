function demo(input) {

    let n = (input[0]);
    let sum = 1;

    for (i = 1; i <= n.length; i++) {
        if (n[i] === " ") {
            sum += 1
        }
    } if (sum > 10) {
        console.log(`The message is too long to be send! Has ${sum} words.`);
    } else {
        console.log("The message was send successfully!");
    }
}
demo(["Normal", "21", "13"]);