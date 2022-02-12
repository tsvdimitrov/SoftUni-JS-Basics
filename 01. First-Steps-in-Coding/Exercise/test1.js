class Person {

    constructor(name) { this.name = name; this.username = name.split(/\s+/)[0].toLowerCase(); }

}

class Employee extends Person {

    constructor(organization) { this.organization = organization; }

    getInfo() { return `I'm ${this.name} [user: ${this.username}] from ${this.organization}`; }

}

let john = new Employee('Hristo Georgiev', 'SU');

console.log(john.getInfo());