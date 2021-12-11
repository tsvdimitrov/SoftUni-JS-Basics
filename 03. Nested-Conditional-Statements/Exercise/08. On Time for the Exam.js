function demo(input) {

    let hourOnExam = Number(input[0]);
    let minOnExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let examTime = (hourOnExam * 60) + minOnExam;
    let arriveTime = (hourArrive * 60) + minArrive;

    if (examTime - arriveTime <= 30 && examTime - arriveTime >= 0) {
        console.log(`On time`);
        if (examTime - arriveTime !== 0) {
            console.log(`${examTime - arriveTime} minutes before the start`);
        }
    } else if (examTime - arriveTime > 30) {
        console.log(`Early`);
        if (examTime - arriveTime < 60) {
            console.log(`${examTime - arriveTime} minutes before the start`);
        } else {
            let difference = examTime - arriveTime;
            let hour = Math.floor(difference / 60);
            let min = difference % 60;
            if (min < 10) {
                console.log(`${hour}:0${min} hours before the start`);
            } else {
                console.log(`${hour}:${min} hours before the start`);
            }
        }
    } else {
        console.log(`Late`);
        let difference = Math.abs(arriveTime - examTime);
        let hour = Math.floor(difference / 60);
        let min = difference % 60;
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            if (min < 10) {
                console.log(`${hour}:0${min} hours after the start`);
            } else {
                console.log(`${hour}:${min} hours after the start`);
            }
        }
    }
}
demo(["9",
    "30",
    "9",
    "50"]);
