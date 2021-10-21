// Importing modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');
const path = require('path');

//importing sub Classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

let teamArr = [];

const app = function () {
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
                        addTeamMember()
                    })              
                }
        })

}

//function that gives option of generating another team member.
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
            console.log(teamArr[0].name)
            questionFinish(teamArr);
        }
    });
};

// take answers from command line prompts and begin writing index.html
function questionFinish(teamArr) {
        fs.writeFileSync("./newHTML/index.html",generateHTML(teamArr), "utf-8")
}
//begins the questions
questions()

}
//just wrapping functions in functions for fun, cause that's what life is about.
app(); 

