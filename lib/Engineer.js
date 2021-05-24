const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github, role){
        super(name, id, email);

        this.github = github;
        this.role = role;
    }

    getGithub(){
        return `www.github.com/${this.github}`;
    }

    getRole(){
        return super.getRole();
    }
}

module.exports = Engineer;