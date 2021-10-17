// Importing modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');
const { generateTeamArr } = require('./utils/generateHtml')

//importing sub Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

let teamArr = [];



// Question choosing which role to create
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
    //question specific to employee type based on selection
            .then((answers) => {
                if(answers.role === "Manager") {
                    // console.log(answers.role)
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
                        //creation of subClass that is pushed into teamArr
                    ]).then(function (answers) {
                        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
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
                        //creation of subClass that is pushed into teamArr
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
                        //creation of subClass that is pushed into teamArr
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
            // console.log(teamArr)
            finishQuestions(teamArr);
        }
    })
}

// // TODO: Create a function to write README file
// function writeToFile(teamArr) {
function finishQuestions(teamArr) {
    fs.writeFileSync('./newHTML/index.html', generateHTML(teamArr))
}
//}
// TODO: Create a function to initialize app
// function init() {
questions()
    // .then((teamArr) => writeToFile(teamArr))
    // .catch((err) => console.error(err));
// }

// Function call to initialize app
// init();


