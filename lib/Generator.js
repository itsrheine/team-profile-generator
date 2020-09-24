const inquirer = require('inquirer');
const Employee = require('./Employee');

function Generator() {
    this.employee;
}

Generator.prototype.initializeGenerator = function () {
    inquirer.prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
        // destructure name from the prompt object
        .then(({ name }) => {
            this.employee = new Employee(name);
        });

};

module.exports = Generator;
