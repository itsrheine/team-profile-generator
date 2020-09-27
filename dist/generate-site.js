const allEmployee = require('../index.html');

var newCardEmployee = document.querySelector("#newCardEmployee");

const newCardEmployeeEl = function() {
    for (let i = 0; i < allEmployee.length; i++) {

        // Manager Loops
        if (allEmployee[i].role === 'Manager') {
            super(name, id, email, number)
            employeeCard = document.createElement("p");
            employeeCard.className = "card-text"
            employeeCard.innerHTML=`
        <div class="card bg-primary text-center">
            <p class="card-text" id="manager">` +allEmployee[i].name `</p>
            <p class="card-text" id="role">Manager</p>
        <div class="card-white text-center">
            <p class="card-text" id="id">` +allEmployee[i].id `</p>
            <p><a class="card-text" id="email" href="`+allEmployee[i].email `">`+allEmployee[i].email `</a></p>
            <p class="card-text" id="number">` +allEmployee[i].number `</p>
        </div>
        </div>
            `
            newCardEmployee.appendChild(employeeCard)
            allEmployee.push(allEmployee[i].role === 'Manager');
        } 
    }
}

module.exports = {newCardEmployeeEl};