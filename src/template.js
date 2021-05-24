const inquirer = require('inquirer');
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee.js');

console.log('start');

const templateQuestions = () => {
    console.log(`
    ==============================
    Add a New Employee to Registry
    ==============================
    `);    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter employee name.(Required)',
            validate: name => {
                if (name){
                    return true;
                }else{
                    console.log('Employee name is required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter employee email(Required)',
            validate: email => {
                if (email){
                    return true;
                }else{
                    console.log('Employee email is required!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is this employee's role?",
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]);
};
console.log('middle');

const employeeDetails = function (employee){
    if(employee.role === 'Manager'){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter Manager office number.'
            }
        ]);
    }else if(employee.role === 'Engineer'){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: "Please enter engineer's github username."
            }
        ]);
    }else if(employee.role === 'Intern'){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: 'Please enter interns school name.'
            }
        ]);
    };
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
};
console.log('end');

const confirmAdd = employee => {
    let teamRegister = [];
    
    
    if (!teamRegister){
        teamRegister = [];
    }
    teamRegister.push(employee);
    if(employee.confirmAddEmployee){
        return templateQuestions(data);
    }else{
        return console.log(newEmployee);
    }
};
templateQuestions()
.then(employeeDetails)
.then(confirmAdd);

module.exports = {templateQuestions, employeeDetails};