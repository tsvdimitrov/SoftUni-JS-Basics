function demo(input) {

    time = Number(input[0]);
    partOfDay = input[1];

    if (time >= 10 && time < 18) {
        switch (partOfDay) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open');
                break;
            case 'Sunday':
            default:
                console.log('closed');
                break;
        }
    } else {
        console.log('closed');
    }
}
demo(["11", "Sunday"]);