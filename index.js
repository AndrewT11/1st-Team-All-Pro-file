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



//baseline framework from last hw
// TODO: Create an array of questions for user input
const questions = function () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please input the employee\'s id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please input the employee\'s email'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What position does the employee hold?',
            choices: [ 
                "Manager",
                "Engineer",
                "Intern",
                "No more. We broke."
            ]
        }
        .then(answers => {
            if (answers.role === "Manager") { 
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'office',
                        message: "What is the manager's office number?"
                    },
                    {
                        type: 'confirm',
                        name: 'addTeamMember',
                        message: "Would you like to add another team member?"
                    }
                ]) //what to do here. If another team member, want to questions() again. .then(answers). Where does this data go? Send info to make manager card. collect info from all employees, then generateHTML() pushed after.

            } else if (answers.role === "Engineer") {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is engineer's Github id?"

                    },
                    {
                        type: 'confirm',
                        name: 'addTeamMember',
                        message: "Would you like to add another team member?"
                    }
                ])
            } else (answers.role === "Intern") {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What school did the intern attend?'
                    },
                    {
                        type: 'confirm',
                        name: 'addTeamMember',
                        message: "Would you like to add another team member?"
                    }
                ])
            }
        })
    

    ])    
}

// TODO: Create a function to write README file
function writeToFile(answers) {
    fs.writeFileSync('./newHTML/index.html', generateHTML(answers))
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => writeToFile(answers))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();

//document.createElement
// document.appendChild
// document.insertBefore
// document.insertAdjacentHTML
// http://net-informations.com/js/iq/elements.htm reminder of creating HTML dynamically
// https://www.iusmentis.com/technology/www/relativeurls/ Using and interpreting relative URLs