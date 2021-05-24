const { prompt } = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generatePage = require('./src/generate-page');
const employeeRegister = [];

console.log('Initiated application')
async function start(data){

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
    ]);
    

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
};

function createManager(employee) {
    console.log(employee);
    prompt({
        type: 'input',
        name: 'officeNumber',
        message: "What is this Manager's office number?"
    },
    {
        type: 'confirm',
        name: 'addConfirm',
        message: 'Would you like to add another Employee?',
        default: false
    })
    .then((data) =>{
        const manager = new Manager(employee.name, employee.id, employee.email, employee.role, data.officeNumber);
        employeeRegister.push(manager);
        console.log(`
        --------------------------------
        New employee added successfully!
        --------------------------------
        `)
            if (data.addConfirm == true){
                return start(employeeRegister);
            }else{
                console.log(employeeRegister);                
            }
        
    })
}

function createEngineer(employee) {
    console.log(employee);
    prompt({        
            type: 'input',
            name: 'github',
            message: "Enter Engineer's github username."        
    })
    console.log(`
    --------------------------------
    New employee added successfully!
    --------------------------------
    `)
    prompt({
        type: 'confirm',
        name: 'addConfirm',
        message: 'Would you like to add another Employee?',
        default: false
    })
    .then((data) => {
        const engineer = new Engineer(employee.name, employee.id, employee.email, employee.role, data.github);
        employeeRegister.push(engineer);
        if (data.addConfirm){
            return start(employeeRegister);
        }else{
            console.log(employeeRegister);                
        }        
    });
};

function createIntern(employee) {
    prompt({
        type: 'input',
        name: 'school',
        message: 'What school does(did) intern attend?'
    })
    console.log(`
    --------------------------------
    New employee added successfully!
    --------------------------------
    `)
    prompt({
        type: 'confirm',
        name: 'addConfirm',
        message: 'Would you like to add another Employee?',
        default: false
    })
    .then((data) => {
        const intern = new Intern(employee.name, employee.id, employee.email, employee.role, data.school);
        employeeRegister.push(intern);
        if (data.addConfirm){
            return start(employeeRegister);
        }else{
            console.log(employeeRegister);                
        }        
    });
};


start();