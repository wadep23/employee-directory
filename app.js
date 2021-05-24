const { prompt } = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generatePage = require('./src/generate-page');
const employeeRegister = [];

console.log('Initiated application')
async function start(){

    console.log(`
    ==============================
    Add a New Employee to Registry
    ==============================
    `); 

    let employee = await
    prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What employee would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
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
        }
    ])
    

    switch(employee.role){
        case 'Manager':
            createManager(employee);
            break;
        case 'Engineer':
            createEngineer(employee);
            break;
        case 'Intern':
            createIntern(employee);
            break;
        default:
            console.log(employeeRegister);
    }
}

function createManager() {
    prompt({
        type: 'input',
        name: 'officeNumber',
        message: "What is this Manager's office number?"
    })
    .then((data) =>{
        const manager = new Manager(data);
            employeeRegister.push(manager);
            console.log(manager);
        
    })
}

function createEngineer() {
    prompt({        
            type: 'input',
            name: 'github',
            message: "Enter Engineer's github username."        
    })
    .then((data) => {
        const engineer = new Engineer(data);
        employeeRegister.push(engineer);
    })
}

function createIntern() {
    prompt({
        type: 'input',
        name: 'school',
        message: 'What school does(did) intern attend?'
    })
    .then((data) => {
        const intern = new Intern(data);
        employeeRegister.push(intern);        
    })
}

start();