const Engineer = require("../lib/Engineer");
const engineer = new Engineer ("Jimmy", 2331,"test@email.com", "gitusername");

test ("Create a new engineer named Jimmy", () => {
    expect(engineer.name).toBe("Jimmy");
    expect(engineer.id).toEqual(2331);
    expect(engineer.email).toBe("test@email.com");
    expect(engineer.github).toEqual("gitusername");
});

test ("gets engineer name on call", () => {
    expect(engineer.getName()).toEqual(engineer.name);
});

test ("get engineer id", () => {
    expect(engineer.getId()).toEqual(engineer.id);
});

test ("get engineer email", () => {
    expect(engineer.getEmail()).toEqual(engineer.email);
});

test ("get engineer role", () => {
    expect(engineer.getRole()).toEqual("Engineer");
});

test ("get engineer github", () => {
    expect(engineer.getGitHub()).toEqual(engineer.github);
});