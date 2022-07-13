const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const inquirer = require('inquirer');
//team profiles
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


//array to hold all future added team member information
const memberInfoArr = [];




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
    //push to team member array
    memberInfoArr.push(manager);
    console.log(manager);
});

};



const promptEmployee = () => {

    console.log('------ adding new employee ------')


    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "what is the employee's role?",
            choices: ['Engineer', 'Intern']

        },
        {
            name: 'name',
            type: 'input',
            message: 'What is this employees name?',
        },
        {
            type: 'input',
            message: 'Enter employee ID',
            name: 'id',
        
        },
        {   type: 'input',
            message: 'Enter employee email address',
            name: 'email',
        },
        {
            type: 'input',
            name: 'github',
            message: 'please enter the engineer github username',
            //will only be asked if the user selected engineer as the role
            when: (input => input.role === 'Engineer')
        },
        {
            type: 'input',
            name: 'school',
            message: 'please enter the interns school',
            // will only be asked if the user selected intern as the role
            when: (input => input.role === 'Intern')
        }
    ]).then(employeeData => {
        let {role, name, id, email, github, school} = employeeData;

        /// if the user selected engineer, a new employee is 
        //created with these parameters
        if (role === 'Engineer'){
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        /// if the user selected intern, a new employee is
        //created with these parameters
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        //push new employee to team array
        memberInfoArr.push(employee);
    })



};


//writing file to html page using fs
const writeFile = data => {
    fs.writeFile('./dist.index.html', data, err =>{
        //error handling
        if (err){console.log(err);
        return;
        } else {
            //no error = file created in dist folder
            console.log('check dist folder for file')
        }
    })
}




promptManager()
.then(promptEmployee)
.then(memberInfoArr => {
    return generateHTML(memberInfoArr);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})


