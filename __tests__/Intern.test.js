const Intern = require("../lib/Intern");
const intern = new Intern ("Jimmy", 2331,"test@email.com", "MIT");

test ("Create a new intern named Jimmy", () => {
    expect(intern.name).toBe("Jimmy");
    expect(intern.id).toEqual(2331);
    expect(intern.email).toBe("test@email.com");
    expect(intern.school).toEqual("MIT");
});

test ("gets intern name on call", () => {
    expect(intern.getName()).toEqual(intern.name);
});

test ("get intern id", () => {
    expect(intern.getId()).toEqual(intern.id);
});

test ("get intern email", () => {
    expect(intern.getEmail()).toEqual(intern.email);
});

test ("get intern role", () => {
    expect(intern.getRole()).toEqual("Intern");
});

test ("get intern github", () => {
    expect(intern.getSchool()).toEqual("MIT");
});