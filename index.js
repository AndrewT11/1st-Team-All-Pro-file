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
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please input your id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please input your email'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What position does the employee hold?',
            choices: [ 
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
        .then(answers => {
        if (role === "Manager") { 
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please input your email'
                }
            ])

        } else if (role === "Engineer") {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please input your email'
                    
                }

        } else (role === "Intern") {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please input your email'
                }

        }}
    }

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