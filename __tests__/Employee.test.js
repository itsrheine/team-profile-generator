const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', '123', 'me@me');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('me@me');
});

test(`get's employee name value`, () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toBe('Dave');
});

test(`get's employee ID value`, () => {
    const employee = new Employee('Dave', 123);

    expect(employee.getID()).toBe(123);
});

test(`get's employee email value`, () => {
    const employee = new Employee('Dave', 123, 'me@me');

    expect(employee.getEmail()).toBe('me@me');
});

test(`get's employee overall stats`, () => {
    const employee = new Employee('Dave');
    employee.description = ('Dave', 123, 'me@me');

    expect(employee.getRole()).toEqual(expect.stringContaining(employee.description));
});