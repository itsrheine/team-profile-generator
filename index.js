const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let allEmployee = [];
let teamName = [];

const initializeGenerator = () => {

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
                    message: 'Thank you for using the Team Profile Generator',
                }
            ]);

            generatePage();

        });
}

function generatePage() {
    // Start HTML
    const htmlEmployee = [];
    const pageHTMLheader = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team ${teamName}</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    </head>
    <body>
    <header class="bg-info">
        <div class="p-4 text-white text-center">
            <h1>Team ${teamName}</h1>
        </div>
    </header>

    <div class="container">
        <div class="card-deck row">`;

    htmlEmployee.push(pageHTMLheader);

    for (let i = 0; i < allEmployee.length; i++) {

        let employee = `
            <div class="card text-white bg-info mb-3 mt-5 mb-0" style="max-width: 18rem;">
                <div class="card-header">  
                    <p class="h3">${allEmployee[i].name}</p>`;

        // icon 
        if (allEmployee[i].role === 'Manager') {
            employee += `          
                    <p class="h4"><i class="fas fa-mug-hot"></i>  ${allEmployee[i].role}</p>`
        }
        if (allEmployee[i].role === 'Engineer') {
            employee += `          
                    <p class="h4"><i class="fas fa-glasses"></i>  ${allEmployee[i].role}</p>`
        }
        if (allEmployee[i].role === 'Intern') {
            employee += `          
                    <p class="h4"><i class="fas fa-user-graduate"></i>  ${allEmployee[i].role}</p>`
        }
        employee += `
                </div>
                <div class="card-body bg-light text-dark mb-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${allEmployee[i].id}</li>
                        <li class="list-group-item"><a class="card-text text-dark" id="email" href="mailto:${allEmployee[i].email}">Email: ${allEmployee[i].email}</a></li>`;

        // manager
        if (allEmployee[i].number) {
            employee += `
                    <li class="list-group-item">Office: ${allEmployee[i].number}</li>`
        }
        // engineer
        if (allEmployee[i].github) {
            employee += `
                    <li class="list-group-item">GitHub: <a target="_blank" href="https://www.github.com/${allEmployee[i].github}">${allEmployee[i].github}</a></li>`
        }
        // intern
        if (allEmployee[i].school) {
            employee += `
                    <li class="list-group-item">School: ${allEmployee[i].school}</li>`
        }
        employee += `
                </ul>
            </div>
        </div>`

        htmlEmployee.push(employee);
    }

    const pageHTMLfooter = `
        </div>
    </div>
</body>
</html>
    `;
    htmlEmployee.push(pageHTMLfooter);

    fs.writeFile('./dist/index.html', htmlEmployee.join(''), err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }
    })
}

initializeGenerator();