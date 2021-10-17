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
                        addTeamMember()
                        ])
                    })
                }
                }
                
            })

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
    //     {
    //         type: 'input',
    //         name: 'office',
    //         message: "What is the manager's office number?",
    //         when: (answers) => answers.role === "Manager" 
                
            
    //     },
    //     {
    //         type: 'input',
    //         name: 'github',
    //         message: "What is the engineer's Github?",
    //         when: (answers) => answers.role === "Engineer"
            
    //     },
    //     {
    //         type: 'input',
    //         name: 'school',
    //         message: "What school did the intern attend?",
    //         when: (answers) => answers.role === "Intern"
            
    //     },
    //     {
    //         type: 'confirm',
    //         name: 'addTeamMember',
    //         message: "Would you like to add another team member?",
    //         default: false,
    //     },
    // ]).then((answers) => {
    //     if(answers.role = "Manager") {
    //         const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    //         teamArr.unshift(manager);
    //         teamArr[0].role = answers.role;
    //         console.log(teamArr);
    //     }
    //     if(answers.role = "Engineer") {
    //         const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    //         teamArr.unshift(engineer);
    //         teamArr[0].role = answers.role;
    //         console.log('engineer created');
    //     }
    //     if(answers.role = "Intern") {
    //         const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    //         teamArr.unshift(intern);
    //         teamArr[0].role = answers.role;
    //         console.log('intern created');
    //     }      
    //     if(answers.addTeamMember === true) {
    //         console.log("saying yes to new teams");
    //         questions()
    //     } else {
    //         console.log("Saying no to new teammates");
    //         console.log(teamArr);
    //         return;
    //     } 
    // }                     
// };

// function addTeamMember() {

// }


// // // TODO: Create a function to write README file
// function writeToFile(teamArr) {
    
//     fs.writeFileSync('./newHTML/index.html', generateHTML(teamArr))}
// // }

// // TODO: Create a function to initialize app
// function init() {
//     questions()
//     .then((teamArr) => writeToFile(teamArr))
//     .catch((err) => console.error(err));
// }

// // Function call to initialize app
// init();

//document.createElement
// document.appendChild
// document.insertBefore
// document.insertAdjacentHTML
// http://net-informations.com/js/iq/elements.htm reminder of creating HTML dynamically
// https://www.iusmentis.com/technology/www/relativeurls/ Using and interpreting relative URKs
