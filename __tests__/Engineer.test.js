const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test(`get's employee github value`, () => {
    const engineer = new Engineer('Dave', '123', 'me@me', 'itsrheine');

    expect(engineer.github).toBe('itsrheine');
    expect(engineer.getGithub()).toBe('itsrheine');
});

// test(`get's employee github()`, () => {
//     const engineer = new Engineer('Dave', '123', 'me@me', 'itsrheine');
//     engineer.github = 'itsrheine'

//     expect(engineer.getGithub()).toBe(engineer.github);
// });

test(`returns 'Engineer'`, () => {
    const engineer = new Engineer('Dave', '123', 'me@me', 'itsrheine');
    engineer.role = 'Engineer'

    expect(engineer.getRole()).toBe(engineer.role);
});