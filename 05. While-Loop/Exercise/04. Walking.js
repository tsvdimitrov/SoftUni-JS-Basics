function demo(input) {

    let index = 0;
    let command = input[index]
    let currentSteps = 0;
    index++;

    while (true) {

        if (10000 <= currentSteps) {
            console.log('Goal reached! Good job!');
            console.log(`${currentSteps - 10000} steps over the goal!`);
            break;
        }
        if (command == "Going home") {
            currentSteps += Number(input[input.length - 1]);
            if (10000 > currentSteps) {
                console.log(`${10000 - currentSteps} more steps to reach goal.`);
            } else {
                console.log('Goal reached! Good job!');
                console.log(`${currentSteps - 10000} steps over the goal!`);
                // break;  
            }
            break;
        }
        currentSteps += Number(input[index - 1]);
        command = input[index];
        index++
    }
}
demo(["1000",
    "1500",
    "2000",
    "6500"]);