// Importing modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

//importing sub Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

let teamArr = [];



// TODO: Create an array of questions for user input
const questions = function () {
   return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What position does the employee hold?',
            choices: [ 
                "Manager",
                "Engineer",
                "Intern",        
            ]
        }
   ])
    //add if statements here instead.
            .then((answers) => {
                if(answers.role === "Manager") {
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "What is the manager's name?"
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Please input the manager\'s id'
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Please input the employee\'s email'
                        },
                        {
                            type: 'input',
                            name: 'office',
                            message: "Enter manager's office number?"
                        },
                    ]).then(function (answers) {
                        const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
                        teamArr.push(manager)
                        console.log('manager created')
                        addTeamMember()
                    })
                } else if (answers.role === "Engineer") {
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "What is the engineer's name?"
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Please input the engineer\'s id'
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Please input the engineer\'s email'
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: "Enter enginener's Github?"
                        },
                    ]) .then(function (answers) {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                        teamArr.push(engineer)
                        console.log('engineer created')
                        addTeamMember()
                    })
                } else if (answers.role === "Intern") {
                    return inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "What is the intern's name?"
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Please input the intern\'s id'
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Please input the intern\'s email'
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "What school did the intern attend?"
                        },
                    ]) .then(function(answers) {
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                        teamArr.push(intern)
                        console.log('intern created')
                        addTeamMember()
                    })              
                }
        })
    
}

const addTeamMember = function () {
    return inquirer.prompt([
        {
            name: "teamMember",
            message: "Are there any other team members?",
            type: "confirm",            
        }
    ]).then((answers) => {
        if(answers.teamMember === true){
            questions();
        } else {
            console.log(teamArr)
            generateHTML(answers)
        }
    })
}

// // TODO: Create a function to write README file
function writeToFile(teamArr) {
    
    fs.writeFileSync('./newHTML/index.html', generateHTML(teamArr))}
// }

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((teamArr) => writeToFile(teamArr))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();


