const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

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
                roleManager();
            } 
            else if (userChoice.role === 'Engineer') {
                roleEngineer();
            }
            else if (userChoice.role === 'Intern') {
                roleIntern();
            }
        })
}

Generator.prototype.roleManager = function () {
    inquirer.prompt([
        {
            type: 'text',
            name: 'number',
            message: `What is your office's phone number?`,
        }
    ])
};

Generator.prototype.roleEngineer = function () {
    inquirer.prompt([
        {
            type: 'text',
            name: 'github',
            message: `What is your GitHub username?`,
        }
    ])
};

Generator.prototype.roleIntern = function () {
    inquirer.prompt([
        {
            type: 'text',
            name: 'school',
            message: `What is the name of the school you are currently attending?`,
        }
    ])
};

module.exports = Generator;
