function demo(input) {

    let figure = input[0];

    if (figure === "square") {
        let num = Number(input[1]);
        let area = num * num;
        console.log(area.toFixed(3));
    } else if (figure === "rectangle") {
        let num1 = Number(input[1]);
        let num2 = Number(input[2]);
        let area = num1 * num2;
        console.log(area.toFixed(3));
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        let area = Math.PI * radius * radius;
        console.log(area.toFixed(3));
    } else if (figure === "triangle") {
        let num = Number(input[1]);
        let height = Number(input[2]);
        let area = num * height / 2;
        console.log(area.toFixed(3));
    }
}