function demo(input) {

    let dogNumber = Number(input[0]);
    let restAnimalsNumber = Number(input[1]);

    let foodCost = (dogNumber * 2.5) + (restAnimalsNumber * 4);

    console.log(`${foodCost} lv.`);
}