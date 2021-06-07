const Employee = require("./employee"); 

class Manager extends Employee {
    constructor(name, id, email, empOfficeNumber) {
        super(name, id, email);

        this.officeNumber = empOfficeNumber; 
    }

    getOfficeNumber() {
        return this.officeNumber; 
    }

    getRole() {
        return "Manager"; 
    }
}

module.exports = Manager; 