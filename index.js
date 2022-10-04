const generateHTML = require('./src/genHTML');
const fs = require('fs');
const inquirer = require('inquirer');
//team members
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


//array to hold all future team member information
const memberInfoArr = [];
//array to hold id
const idArray = [];


function app() {
//manager info prompts collect information about the manager, adds it to
//manager array then points to promptTeam()
const promptManager = () => {

    return inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'What is the managers name?',
        validate: answer => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          }
    },
    {
        type: 'input',
        message: 'Enter manager employee ID',
        name: 'id',
        validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
    
    },
    {   type: 'input',
        message: 'Enter manager email address',
        name: 'email',
        validate: answer => {
            const pass = answer.match(
              /\S+@\S+\.\S+/
            );
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          }
    },
    {
        type: 'input',
        message: 'Enter manager office number',
        name: 'office',
        validate: answer => {
            const pass = answer.match(
              /^[1-9]\d*$/
            );
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          }
    }])
.then(managerInfo => { 
   const {name, id, email, office} = managerInfo;
    const manager = new Manager (name, id, email, office);
    //push to team member array
    memberInfoArr.push(manager);
    console.log(manager);
    promptTeam();
});

};



const promptTeam = () => {
//promptTeam asks what type of employee we will add next, the selection
//determines what function is called next.
    console.log('------ adding new employee ------')


    inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "what is the employee's role?",
            choices: ['Engineer', 'Intern', 'Im finished building my team']

        }
    ]).then(userChoice => {
        switch (userChoice.role) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
}
    function addEngineer() {

    }

    function addIntern() {

    }

    function buildTeam() {
        
    }
    


    promptManager()
};

app();
