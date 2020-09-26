const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test(`get's employee phone number value`, () => {
    const manager = new Manager('Dave', '123', 'me@me', '6542154');

    expect(manager.number).toBe('6542154');
});

test(`returns 'Manager'`, () => {
    const manager = new Manager('Dave', '123', 'me@me', '6542154');
    manager.role = 'Manager'

    expect(manager.getRole()).toBe(manager.role);
});