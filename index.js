// const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const inquirer = require('inquirer');
//team profiles
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');



const memberInfo = [];




const promptManager = () => {

    return inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'What is the managers name?',
    },
    {
        type: 'input',
        message: 'Enter manager employee ID',
        name: 'id',
    
    },
    {   type: 'input',
        message: 'Enter manager email address',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter manager office number',
        name: 'office',
    }])
.then(managerInfo => { 
   const {name, id, email, office} = managerInfo;
    const manager = new Manager (name, id, email, office);
    memberInfo.push(manager);
    console.log(manager);
});

};

promptManager();


