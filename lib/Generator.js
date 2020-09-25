const { generateKeyPair } = require('crypto');
const inquirer = require('inquirer');
const { type } = require('os');
const Employee = require('./Employee');

function Generator() {
    this.employee;
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

            // destructure name from the prompt object
            .then(({ name }) => {
                this.employee = new Employee(name);
        })
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is your employee ID?',
            validate: employeeID => {
                if (employeeID) {}
            }

        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your email address?',
            validate: employeeEmail => {
                if (employeeEmail) {}
            }

        },
        {
            type: 'checkbox',
            name: 'role',
            message: 'What is your role as an employee?',
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: selectRole => {
                if (selectRole === 'Manager') {
                    roleManager();
                } 
                else if (selectRole === 'Engineer') {
                    roleEngineer();
                }
                else if (selectRole === 'Intern') {
                    roleIntern();
                }
            }

        },
    ])       
};

Generator.prototype.roleManager = function () {
    inquirer.prompt([
        {
            type: 'text',
            name: 'number',
            message: `What is your office's phone number?`,
            validate: employeeEmail => {
                if (employeeEmail) {}
            }
        },
}   

Generator.prototype.roleEngineer()

Generator.prototype.roleIntern()

module.exports = Generator;
