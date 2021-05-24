const { v4: uuidv4 } = require('uuid');

class Employee{
    constructor(name = '', email, role){
        this.name = name;
        this.id = uuidv4();
        this.email = email;
        this.role = role;
    }

    getName(){
        return this.name;
    };

    getId(){
        return this.id;
    };

    getEmail(){
        return this.email;
    };

    getRole(){
        return this.role;
    };
}


module.exports = Employee;