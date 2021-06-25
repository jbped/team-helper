const Employee = require("../lib/Employee");
const employee = new Employee ("Jimmy", 2331,"test@email.com");

test ("Create a new employee named Jimmy", () => {
    expect(employee.name).toBe("Jimmy");
    expect(employee.id).toEqual(2331);
    expect(employee.email).toBe("test@email.com");
});

test ("gets employee name on call", () => {
    expect(employee.getName()).toEqual(employee.name);
});

test ("get employee id", () => {
    expect(employee.getId()).toEqual(employee.id);
});

test ("get employee email", () => {
    expect(employee.getEmail()).toEqual(employee.email);
});

test ("get employee role", () => {
    expect(employee.getRole()).toEqual("Employee");
});