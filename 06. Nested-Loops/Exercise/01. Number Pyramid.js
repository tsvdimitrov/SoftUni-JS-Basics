function demo(input) {

    let n = Number(input[0]);
    let counter = 1;
    let isFinish = false;

    for (let row = 1; row <= n; row++) {
        let buffer = "";
        for (let col = 1; col <= row; col++) {
            buffer += counter + " ";
            counter++;
            if (counter > n) {
                isFinish = true;
                break;
            }
        }
        console.log(buffer);
        if (isFinish) {
            break;
        }
        buffer = "";
    }
}
demo(["7"]);