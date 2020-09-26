class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
        this.employee;
    }
    
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

    getInfo() {
        return{
            employee: this.employee,
            id: this.id,
            email: this.email,
            role: this.role,
            github: this.github,
            phone: this.phone,
            school: this.school
        };
    }
}

module.exports = Employee;