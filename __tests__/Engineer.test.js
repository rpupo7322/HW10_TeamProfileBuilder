const Employee = require("../lib/engineer")


decribe("employee", () => {
    it("should return name with getName()", () => {
        const nameTest = 'Rob';
        const test = new Employee(nameTest)
        expect(test.getName()).toBe(nameTest);
    })
    it("should return id with getId()", () => {
        const idTest = 1;
        const test = new Employee("Rob", idTest)
        expect(test.getId()).toBe(idTest);
    })
    it("should return email with getEmail()", () => {
        const emailTest = "rob@mgail.com";
        const test = new Employee("Rob", 1, emailTest)
        expect(test.getId()).toBe(emailTest);
    })
    it("should return role with getRole()", () => {
        const roleTest = "Engineer";
        const test = new Employee("Rob", 1, "rob@mgail.com", roleTest)
        expect(test.getRole()).toBe(roleTest);
    })
    it("should return github with getGithub()", () => {
        const githubTest = "Employee";
        const test = new Employee("Rob", 1, "rob@mgail.com", githubTest)
        expect(test.getGithub()).toBe(githubTest);
    })
});