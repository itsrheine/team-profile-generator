const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test(`get's employee school value`, () => {
    const intern = new Intern('Dave', '123', 'me@me', 'UCB');

    expect(intern.school).toBe('UCB');
    expect(intern.getSchool()).toBe('UCB');
});

// test(`get's employee getSchool()`, () => {
//     const intern = new Intern('Dave', '123', 'me@me', 'UCB');
//     intern.school = 'UCB'

//     expect(intern.getschool()).toBe(intern.school);
// });

test(`returns 'Intern`, () => {
    const intern = new Intern('Dave', '123', 'me@me', 'UCB');
    intern.role = 'Intern'

    expect(intern.getRole()).toBe(intern.role);
});