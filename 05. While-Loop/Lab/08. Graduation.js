function demo(input) {
    let index = 0;
    let name = input[index];
    index++;
    let score = Number(input[index]);
    index++;
    let averageGrade = 0;
    let lost = 0

    while (score >= 4) {

        averageGrade += score;
        score = Number(input[index]);

        if (index === 13) {
            console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`);
            break;
        }
        index++

    }
    while (score < 4) {
        lost++;
        if (lost === 2) {
            console.log(`${name} has been excluded at ${index - 1} grade`);
            break;
        }
    }
}
demo(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"]);