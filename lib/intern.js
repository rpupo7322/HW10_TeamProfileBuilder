const Employee = require("./employee"); 

class Intern extends Employee {
    constructor(name, id, email, empSchool) {
        super(name, id, email); 

        this.school = empSchool; 
    }

    getSchool() {
        return this.school; 
    }

    getRole() {
        return "Intern"; 
    }
}

module.exports = Intern; 