const Manager = require("../lib/Manager");
const manager = new Manager ("Jimmy", 2331,"test@email.com", 306);

test ("Create a new manager named Jimmy", () => {
    expect(manager.name).toBe("Jimmy");
    expect(manager.id).toEqual(2331);
    expect(manager.email).toBe("test@email.com");
    expect(manager.room).toEqual(306);
});

test ("gets manager name on call", () => {
    expect(manager.getName()).toEqual(manager.name);
});

test ("get manager id", () => {
    expect(manager.getId()).toEqual(manager.id);
});

test ("get manager email", () => {
    expect(manager.getEmail()).toEqual(manager.email);
});

test ("get manager role", () => {
    expect(manager.getRole()).toEqual("Manager");
});

test ("get manager role", () => {
    expect(manager.getRoom()).toEqual(306);
});