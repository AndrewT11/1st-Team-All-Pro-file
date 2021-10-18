const generateTeamArr = function() {
    teamArr.forEach((employee) => {
        console.log(teamArr)  //does not print. teamArr
        if (employee.role === "Manager") {
            console.log('generating Manager')
            return `
            <div class="card employee-card" col-3>
                <div class="card-header">
                    <h2 class="card-title">${employee.name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employee.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item">Office number: ${employee.officeNumber}</li>
                    </ul>
                </div>
            </div>
            `
        } else if (employee.role === "Engineer") {
            console.log('generating Engineer')
            return `                
            <div class="card employee-card" col-3>
                <div class="card-header">
                    <h2 class="card-title">${employee.name}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${employee.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${employee.email}">${ employee.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
                    </ul>
                </div>
            </div>
            `
        } else {
            console.log('generating Intern')
            return `  
            <div class="card employee-card" col-3>
                <div class="card-header">
                    <h2 class="card-title">${employee.name}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${employee.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item">School: ${employee.school}}</li>
                    </ul>
                </div>
            </div>
            `
        }
    })

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>The Squawd</title>
</head>
<body>
<section id="container" col-12>

    ${generateTeamArr()}

</section>


<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`
}
}






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
 