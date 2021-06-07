class Employee {
    constructor(empName, empID, empEmail) {
        this.name = empName; 
        this.id = empID; 
        this.email = empEmail; 
    }


    getName() {
        return this.name; 
    }

    getId() {
        return this.id; 
    }

    getEmail() {
        return this.email; 
    }

    getRole() {
        return "Employee"; 
    }
}

module.exports = Employee; 