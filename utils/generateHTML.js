//Array that will hold all generated enployees to render
const renderArr = [];

//generated HTML for manager
const generateManager = (manager) => {
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-space-shuttle"></i> ${manager.role}</h3>
        </div>
        <div class="card-body">           
                <div class="group-item">ID: ${manager.id}</div>
                <div class="group-item">Email: <a href="mailto: ${manager.email}">${manager.email}</a></div>
                <div class="group-item">Office number: ${manager.officeNumber}</div>           
        </div>
    </div>
    `
};

//generated HTML for engineer
const generateEngineer = (engineer) => {
    return `                
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-hat-wizard"></i> ${engineer.role}</h3>
        </div>
        <div class="card-body">            
                <div class="group-item">ID: ${engineer.id}</div>
                <div class="group-item">Email: <a href="mailto: ${engineer.email}">${ engineer.email}</a></div>
                <div class="group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></div>
        </div>
    </div>
    `
};

//generated HTML for Intern
const generateIntern = (intern) => {
    return `  
            <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${intern.name}</h2>
                    <h3 class="card-title"><i class="fas fa-user-ninja"></i> ${intern.role}</h3>
                </div>
                <div class="card-body">                    
                        <div class="group-item">ID: ${intern.id}</div>
                        <div class="group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></div>
                        <div class="group-item">School: ${intern.school}</div>                    
                </div>
            </div>
            `
};

//function that will take each employee role, and begin the rendering process.
const renderTeamArr = (teamArr) => {
    teamArr.forEach(employee => {
             
        const role = employee.getRole()

        switch(role) {
            case 'Manager': 
                const managerItem = generateManager(employee);
                renderArr.push(managerItem);
                break;
            case 'Engineer':
                const engineerItem = generateEngineer(employee);
                renderArr.push(engineerItem);
                break;
            case 'Intern':
                const internItem = generateIntern(employee);
                renderArr.push(internItem);
                break;
            default: 
                return "Error in switch";
        }

    })
    const finalTeam = renderArr.join(``)
    return finalTeam;
};

//main HTML body that is rendered
function generateHTML(teamArr) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"/>
      <link rel="stylesheet" href="style.css"/>
    />

    <title>The Jungle Squawd</title>
</head>
<body>
<section class="container">
<div class = "header"> The Jungle Squad</div>
    <div class="card-container">
    ${renderTeamArr(teamArr)}
    </div>
</section>
</body>
</html>`
}




module.exports = generateHTML;