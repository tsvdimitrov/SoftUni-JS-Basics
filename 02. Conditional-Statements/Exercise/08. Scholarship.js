function demo(input) {

    let income = Number(input[0]);
    let averageGrade = Number(input[1]);
    let minimumSalary = Number(input[2]);

    let socialScholarship = 0;
    let gradeScholarship = 0;

    if (averageGrade > 4.5 && income < minimumSalary) {
        socialScholarship = Math.floor(minimumSalary * 0.35);
    }

    if (averageGrade >= 5.5) {
        gradeScholarship = Math.floor(averageGrade * 25);
    }

    if (socialScholarship == 0 && gradeScholarship == 0) {
        console.log('You cannot get a scholarship!');
    } else if (gradeScholarship >= socialScholarship) {
        console.log(`You get a scholarship for excellent results ${gradeScholarship} BGN`);
    } else {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    }
}
demo(["300.00", "5.65", "420.00"])