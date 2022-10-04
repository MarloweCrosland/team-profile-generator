const generateHTML = require("./src/genHTML");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
//team members
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

//array to hold all future team member information
const memberInfoArr = [];
//array to hold id
const idArray = [];

//File system variables
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

function app() {
  //manager info prompts collect information about the manager, adds it to
  //manager array then points to promptTeam()
  const promptManager = () => {
    return inquirer
      .prompt([
        {
          name: "name",
          type: "input",
          message: "What is the managers name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          message: "Enter manager employee ID",
          name: "id",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          },
        },
        {
          type: "input",
          message: "Enter manager email address",
          name: "email",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        {
          type: "input",
          message: "Enter manager office number",
          name: "office",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return "Please enter a positive number greater than zero.";
          },
        },
      ])
      .then((managerInfo) => {
        const { name, id, email, office } = managerInfo;
        const manager = new Manager(name, id, email, office);
        //push to team member array
        memberInfoArr.push(manager);
        console.log(manager);
        promptTeam();
      });
  };

  const promptTeam = () => {
    //promptTeam asks what type of employee we will add next, the selection
    //determines what function is called next.
    console.log("------ adding new employee ------");

    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "what is the employee's role?",
          choices: ["Engineer", "Intern", "Im finished building my team"],
        },
      ])
      .then((userChoice) => {
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
  };
  //addEngineer function collects engineer info then points back to promptTeam
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "what is the engineer's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idArray.includes(answer)) {
                return "This ID is already taken. Please enter a different number.";
              } else {
                return true;
              }
            }
            return "Please enter a positive number greater than zero.";
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is your engineer's GitHub username?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        memberInfoArr.push(engineer);
        idArray.push(answers.engineerId);
        promptTeam();
      });
  }

  //addIntern function collects engineer info then points back to promptTeam
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is your intern's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is your intern's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idArray.includes(answer)) {
                return "This ID is already taken. Please enter a different number.";
              } else {
                return true;
              }
            }
            return "Please enter a positive number greater than zero.";
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return "Please enter a valid email address.";
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is your intern's school?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        memberInfoArr.push(intern);
        idArray.push(answers.internId);
        promptTeam();
      });
  }

  //buildTeam creates the output directory and writes the file. (using fs)
  function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  promptManager();
}

app();
