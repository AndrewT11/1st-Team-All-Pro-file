]).then((answers) => {
    teamArr.unshift(answers)
    console.log(answers)
    if(answers.role === "Manager"){
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
                type: 'input',
                name: 'office',
                message: "What is the manager's office number?",
                when: (role) => role === "Manager"
                
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the manager's office number?",
                when: (role) => role === "Engineer"
                
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the manager's office number?",
                when: (role) => role === "School"
                
            },
            {
                type: 'confirm',
                name: 'addTeamMember',
                message: "Would you like to add another team member?"
            }
        ]) .then((answers) => {
                teamArr.unshift(answers);
                teamArr[0].role = answers;
                if(answers.addTeamMember === true)  {
                    questions();
                }
        })
    } else if(answers.role === "Engineer") {
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
                type: 'input',
                name: 'github',
                message: "What is engineer's Github id?"

            },
            {
                type: 'confirm',
                name: 'addTeamMember',
                message: "Would you like to add another team member?"
            }                    
        ]).then((answers) => {
            teamArr.unshift(answers);
            teamArr[0].role = answers.role;
            if(answers.addTeamMember === true)  {
                questions();
            }
        })
    } else if(answers.role === "Intern") {
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
                type: 'input',
                name: 'school',
                message: 'What school did the intern attend?'
            },
            {
                type: 'confirm',
                name: 'addTeamMember',
                message: "Would you like to add another team member?"
            }
        ]).then((answers) => {
            teamArr.unshift(answers);
            teamArr[0].role = answers.role;
            if(answers.addTeamMember === true)  {
                questions();
            }
        })
    }
}).then((answers) => {
    console.log(teamArr);
});
}


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
         },
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
             type: 'input',
             name: 'office',
             message: "What is the manager's office number?",
             when: (answers) => answers.role === "Manager" 
                 
             
         },
         {
             type: 'input',
             name: 'github',
             message: "What is the engineer's Github?",
             when: (answers) => answers.role === "Engineer"
             
         },
         {
             type: 'input',
             name: 'school',
             message: "What school did the intern attend?",
             when: (answers) => answers.role === "Intern"
             
         },
         {
             type: 'confirm',
             name: 'addTeamMember',
             message: "Would you like to add another team member?",
             default: false,
         },
     ]).then(({answers}) => {
         console.log(answers);
         if(answers.addTeamMember === true) {
             if(answers.role === "Manager") {
                 const manager = new Manager(name, id, email, officeNumber);
                 teamArr.push(manager);
                 console.log("saying yes to new teams"); 
                 console.log(teamArr);
                 questions()
             } if (answers.role === "Engineer") {
                 const engineer = new Engineer(name, id, email, github);
                 teamArr.push(engineer);
                 console.log("saying yes to new teams"); 
                 console.log(teamArr);
                 questions();
             } if (answers.role === "Intern") {
                 const intern = new Intern(name, id, email, school);
                 teamArr.push(intern);
                 console.log("saying yes to new teams"); 
                 console.log(teamArr);
                 questions();
             }
         } else {
             teamArr.unshift(answers);
             console.log("Saying no to new teammates");
             console.log(teamArr);
             return;
         } 
     }                 
 )};
 
 questions();


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
         }])
         .then((answers) => {
             
             // let x = 'example'
             // teamArr[0].x = 'hello'
             console.log(answers)
             if (answers.role === "Manager") { 
                 return inquirer.prompt([
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
                     
                 ]).then((answers) => {
                     console.log(answers)
                     teamArr.push(answers)
                     console.log(teamArr)
                     if(answers.addTeamMember === 'Yes') {
                         questions();
                     } else {
                         return;
                     }
                     
                 }) //what to do ere. If another team member, want to questions() again. .then(answers). Where does this data go? Send info to make manager card. collect info from all employees, push into array, then generateHTML() generate items in the array on the screen.
 
             } else if (answers.role === "Engineer") {
                 return inquirer.prompt([
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
             } else if (answers.role === "Intern") {
                 return inquirer.prompt([
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
             } else {
                 return answers;
             }
         })
         
 }
 
 
 
 // // TODO: Create a function to write README file
 function writeToFile(answers) {
     fs.writeFileSync('./newHTML/index.html', generateHTML(answers))}
 // }
 
 // TODO: Create a function to initialize app
 function init() {
     questions()
     .then((answers) => writeToFile(answers))
     .catch((err) => console.error(err));
 }
 
 // Function call to initialize app
 init();
 