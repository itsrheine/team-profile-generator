const inquirer = require('inquirer');
const Employee = require('./Employee');

function Generator() {
    this.name;
    this.id;
    this.email;
    this.role;
}

Generator.prototype.initializeGenerator = function () {

    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is your employee ID?'

        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'checkbox',
            name: 'role',
            message: 'What is your role as an employee?',
            choices: ['Manager', 'Engineer', 'Intern'],

        }])
        .then(userChoice => {
            if (userChoice.role === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'text',
                        name: 'number',
                        message: `What is your office's phone number?`,
                    }
                ])
            }
        })
}

// Generator.prototype.roleManager = function () {
//     inquirer.prompt([
//         {
//             type: 'text',
//             name: 'number',
//             message: `What is your office's phone number?`,
//         }
//     ])
// }

// Generator.prototype.roleEngineer()

// Generator.prototype.roleIntern()

module.exports = Generator;
