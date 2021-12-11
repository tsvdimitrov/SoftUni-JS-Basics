function demo(input) {

    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let cake = width * length;
    let command = input[index];
    index++;

    while (command !== "STOP") {
        cake -= Number(input[index - 1]);
        if (index > input.length - 1) {

            if (cake <= 0) {
                console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);


            } else {
                console.log(`${Math.abs(cake)} pieces are left.`);

            }
            index++;
            break;
        }
        command = input[index];
        index++
    }

    if (index <= input.length) {
        if (cake <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
        } else {
            console.log(`${Math.abs(cake)} pieces are left.`);
        }
    }
}
demo(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);