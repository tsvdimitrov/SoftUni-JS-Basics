function demo(input) {

    let squareMeters = Number(input[0]);

    let price = squareMeters * 7.61;
    let discount = 0.18 * price;

    let totalSum = price - discount;

    console.log(`The final price is: ${totalSum} lv.

The discount is: ${discount} lv.`);
}