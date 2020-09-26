const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let allEmployee = [];
let teamName = [];

function initializeGenerator() {

    inquirer.prompt([
        {
            type: 'text',
            name: 'team',
            message: 'What is your Team Name?'
        }
    ])
        .then(function (value) {
            const team = value.team;

            teamName.push(team);
            newEmployee();
        });
};

// returns to form when they need to add more employees
function newEmployee() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role as an employee?',
            choices: ['Manager', 'Engineer', 'Intern'],
        }
    ])
        .then(function (value) {
            switch (value.role) {

                case 'Manager':
                    roleManager();
                    break;

                case 'Engineer':
                    roleEngineer();
                    break;

                case 'Intern':
                    roleIntern();
                    break;
            }
        })
}

function roleManager() {
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
            type: 'text',
            name: 'number',
            message: `What is your office's phone number?`,
        }
    ])
        .then(function (value) {
            const name = value.name;
            const id = value.id;
            const email = value.email;
            const number = value.number;
            const employee = new Manager(name, id, email, number);

            allEmployee.push(employee);
            addEmployee();
        });
};

function roleEngineer() {
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
            type: 'text',
            name: 'github',
            message: `What is your GitHub username?`,
        }
    ])
        .then(function (value) {
            const name = value.name;
            const id = value.id;
            const email = value.email;
            const github = value.github;
            const employee = new Engineer(name, id, email, github);

            allEmployee.push(employee);
            addEmployee();
        });
};

function roleIntern() {
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
            type: 'text',
            name: 'school',
            message: `What is the name of the school you are currently attending?`,
        }
    ])
        .then(function (value) {
            const name = value.name;
            const id = value.id;
            const email = value.email;
            const school = value.school;
            const employee = new Intern(name, id, email, school);

            allEmployee.push(employee);
            addEmployee();
        });
};

function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add more employees?',
            choices: ['Yes', 'No'],
        }
    ])
        .then(function (value) {
            switch (value.add) {

                case 'Yes':
                    newEmployee();
                    break;

                case 'No':
                    endGenerator();
                    break;
            }
        });
};

function endGenerator() {
    inquirer.prompt([
        {
            name: 'tables',
            message: `Here are the members of Team ` + teamName + '!  (Press Enter)',
        }
    ])
        .then(function () {

            console.table(allEmployee);

            inquirer.prompt([

                {
                    name: 'end',
                    message: 'Thank you for using the Team Profile Generator'
                }
                

            ]);
        });
}

initializeGenerator();
