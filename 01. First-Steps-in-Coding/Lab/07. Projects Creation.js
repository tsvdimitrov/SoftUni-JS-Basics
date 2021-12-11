function demo(input) {

    let architectName = input[0];
    let numberOfProjects = Number(input[1]);

    let hoursPerProject = numberOfProjects * 3;

    console.log(`The architect ${architectName} will need ${hoursPerProject} hours to complete ${numberOfProjects} project/s.`);
}