class Employee {
    constructor(name, id, email, role) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
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
            role: this.role,
            employee: this.employee,
            id: this.id,
            email: this.email,
            github: this.github,
            phone: this.phone,
            school: this.school
        };
    }
}

module.exports = Employee;