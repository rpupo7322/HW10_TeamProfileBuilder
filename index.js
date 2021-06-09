const inquirer = require("inquirer"); 
const fs = require("fs"); 
const util = require('util');

const Manager = require("./lib/manager"); 
const Intern = require("./lib/intern"); 
const Engineer = require("./lib/engineer"); 

const ManagerBuilder = require("./src/ManagerBuilder.js")
const EngineerBuilder = require("./src/EngineerBuilder.js")
const InternBuilder = require("./src/InternBuilder.js")
const HTMLBegin = require("./src/HTMLBegin.js")
const HTMLEnd = require("./src/HTMLEnd.js")

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
      // console.log(teamMembers);
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

  htmlBuild(HTMLBegin);
  ManagerBuilder.managerBuild(manager);
  engineers.forEach((engineer) => {
    EngineerBuilder.EngineerBuild(engineer)
  })
  interns.forEach((intern) => {
    InternBuilder.InternBuild(intern)
  })
  htmlClose(HTMLEnd)
  // console.log(HTMLBegin)
  // console.log(ManagerBuilder)
  // console.log("The manager is", manager);
  // console.log("The engineers are", engineers);
  // console.log("The interns are", interns);
}

const htmlBuild = (HTMLBegin) => {
  fs.writeFile('./dist/teamMembers.html', HTMLBegin.HTMLBegin, (err) => err ? console.log(err) : '')
  // console.log(HTMLBegin.HTMLBegin)
}
const htmlClose = (HTMLEnd) => {
  fs.writeFile('./dist/teamMembers.html', HTMLEnd.HTMLEnd, (err) => err ? console.log(err) : '')
  // console.log(HTMLBegin.HTMLBegin)
}

// const managerBuild = (ManagerBuilder, man) => {
//   let name = man.name;
//   let role = man.getRole();
//   let id = man.id;
//   let email = man.email;
//   let phone = man.phone;
//   // ManagerBuilder.ManagerBuilder;
//   fs.appendFile('./dist/teamMembers.html', ManagerBuilder.ManagerBuilder, (err) => err ? console.log(err) : '')
// }