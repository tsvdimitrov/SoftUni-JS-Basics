function demo(input) {

    let month = input[0];
    let night = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 0;

    if (month === "May" || month === "October") {
        apartmentPrice = night * 65;
        studioPrice = night * 50;
        if (night > 14) {
            studioPrice = studioPrice * 0.70;
            apartmentPrice = apartmentPrice * 0.90;
        } else if (night > 7) {
            studioPrice = studioPrice * 0.95;
        }
    } else if (month === "June" || month === "September") {
        apartmentPrice = night * 68.70;
        studioPrice = night * 75.20;
        if (night > 14) {
            studioPrice = studioPrice * 0.80;
            apartmentPrice = apartmentPrice * 0.90;
        }
    } else if (month === "July" || month === "August") {
        apartmentPrice = night * 77;
        studioPrice = night * 76;
        if (night > 14) {
            apartmentPrice = apartmentPrice * 0.90;
        }
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
demo(["May",
    "15"]);