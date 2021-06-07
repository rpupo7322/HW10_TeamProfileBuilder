const Employee = require("./employee.js"); 


class Engineer extends Employee {
    constructor(name, id, email, empGitHub) {
        super(name, id, email);
        
        this.github = empGitHub; 
    }

    getGithub() {
        return this.github; 
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer; 