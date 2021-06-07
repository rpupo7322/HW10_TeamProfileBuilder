const inquirer = require("inquirer"); 
const fs = require("fs"); 
const util = require('util');

const Manager = require("./lib/manager"); 
const Intern = require("./lib/intern"); 
const Engineer = require("./lib/engineer"); 

const ManagerBuilder = require("./src/ManagerBuilder.HTML")
const EngineerBuilder = require("./src/EngineerBuilder.HTML")
const InternBuilder = require("./src/InternBuilder.HTML")
const HTMLBegin = require("./src/HTMLBegin.HTML")
const HTMLEnd = require("./src/HTMLEnd.HTML")

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);


const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: `What is the name of the manager?`,
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the id of the manager?`,
  },
  {
    type: 'input',
    name: 'email',
    message: `What is the email address of the manager?`,
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: `What is the office phone number of the manager?`,
  },
];

const teamMemberQuestion = [
  {
      type: 'list',
      name: 'newTeamMember',
      message: `What kind of team member would you like to add?`,
      choices: ['Engineer', 'Intern'],
  }
];

const teamMemberQuestion2 = [
  {
    type: 'list',
    name: 'newTeamMember',
    message: 'Would you like to add another employee to your team?',
    choices: ["Engineer", "Intern", "No"],
  }
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: `What is the name of the engineer?`,
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the id of the engineer?`,
  },
  {
    type: 'input',
    name: 'email',
    message: `What is the email address of the engineer`,
  },
  {
    type: 'input',
    name: 'github',
    message: `What is the Github username of the engineer?`,
  },
];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: `What is the name of the intern?`,
  },
  {
    type: 'input',
    name: 'id',
    message: `What is the id of the intern?`,
  },
  {
    type: 'input',
    name: 'email',
    message: `What is the email address of the intern`,
  },
  {
    type: 'input',
    name: 'school',
    message: `What is the school of the intern?`,
  },
];

const teamMembers = []

inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      teamMembers.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));

        // nextChoice = answers.engineerIntern; 
      console.log(teamMembers);
      inquirer.prompt(teamMemberQuestion)
      .then((answers) => {
        if (answers.newTeamMember === 'Engineer') {
          engineerAdd();
        } else {
          internAdd();
        }
    })

    })

const engineerAdd = () => {
  inquirer
  .prompt(engineerQuestions)
  .then((answers) => {
    teamMembers.push(new Engineer(answers.name, answers.id, answers.email, answers.github)); 

      inquirer.prompt(teamMemberQuestion2)
      .then((answers) => {
        if (answers.newTeamMember === 'Engineer') {
          engineerAdd();
        } else if (answers.newTeamMember === 'Intern') {
          internAdd();
        } else {
          // console.log(teamMembers)
          buildHTML(teamMembers);
        }
    })
  })
}
const internAdd = () => {
  inquirer
  .prompt(internQuestions)
  .then((answers) => {
    teamMembers.push(new Intern(answers.name, answers.id, answers.email, answers.school)); 

      inquirer.prompt(teamMemberQuestion2)
      .then((answers) => {
        if (answers.newTeamMember === 'Engineer') {
          engineerAdd();
        } else if (answers.newTeamMember === 'Intern') {
          internAdd();
        } else {
          // console.log(teamMembers)
          buildHTML(teamMembers);
        }
    })
  })
}

const buildHTML =  (tMs) => {
  var manager = null;
  const interns =[];
  const engineers = [];

  // console.log(tMs);
  // console.log(tMs.length)
  // console.log(tMs[0])
  // for(i = 0; i < tMs.length; i++) {
  //   console.log(tMs[i].getRole())
  // }
  tMs.forEach((member) => {
    // console.log(member)
    if (member.getRole() === 'Manager') {
      manager = member;
    } else if (member.getRole() === "Engineer") {
      engineers.push(member)
    } else if (member.getRole() === "Intern") {
      interns.push(member)
    }
  })
  console.log("The manager is", manager);
  console.log("The engineers are", engineers);
  console.log("The interns are", interns);
}