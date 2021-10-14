// Importing modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

//look up extends
// class Intern extends Employee()
// or something like that. Subclass notes. Maybe superman prototype example.

//baseline framework from last hw
// TODO: Create an array of questions for user input
const questions = function () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: ''
        },
        {
            type: 'input',
            name: 'description',
            message: ''
        },
        {
            type: 'list',
            name: '',
            message: '',
            choices: [
                
            ]
        },
        {
            type: 'list',
            name: 'color',
            message: '',
            choices: [
                
            ]
        },
        {
            type: 'input',
            name: 'installation',
            message: ''
        },
        {
            type: 'input',
            name: 'usage',
            message: ''
        },
        {
            type: 'input',
            name: 'contribution',
            message: ''
        },
        {
            type: 'input',
            name: 'test',
            message: ''
        },
        {
            type: 'input',
            name: 'github',
            message: ''
        },
        {
            type: 'input',
            name: 'linkedin',
            message: ''
        },
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