const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let allEmployee = [];

function initializeGenerator() {

    inquirer.prompt([
        {
            type: 'text',
            name: 'team',
            message: 'What is your Team Name?'
        }
    ])
        .then(function(value) {
            const team = value.team;

            allEmployee.push(team);
            newEmployee();
        });

};

// returns to form when they need to add more employees
function newEmployee() {

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

function roleManager() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'number',
            message: `What is your office's phone number?`,
        }
    ])
    .then(function(value) {
        const name = value.name;
        const id = 123;
        const email = value.email;
        const employee = new Manager(name, id, email, number);

        allEmployee.push(employee);
        addEmployee();
    });
};

function roleEngineer() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'github',
            message: `What is your GitHub username?`,
        }
    ])
    .then(function(value) {
        const name = value.name;
        const id = 123;
        const email = value.email;
        const employee = new Manager(name, id, email, number);

        allEmployee.push(employee);
        addEmployee();
    });
};

function roleIntern() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'school',
            message: `What is the name of the school you are currently attending?`,
        }
    ])
    .then(function(value) {
        const name = value.name;
        const id = 123;
        const email = value.email;
        const employee = new Intern(name, id, email, school);

        allEmployee.push(employee);
        addEmployee();
    });
};

initializeGenerator();
