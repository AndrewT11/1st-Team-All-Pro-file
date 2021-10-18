const renderArr = [];

const generateManager = (manager) => {
    return `
    <div class="card employee-card col s3">
        <div class="card-header">
            <h2 class="card-title">${manager.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
};

const generateEngineer = (engineer) => {
    return `                
    <div class="card employee-card col s3">
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto: ${engineer.email}">${ engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
    `
};

const generateIntern = (intern) => {
    console.log("intern inside")
    return `  
            <div class="card employee-card col s3">
                <div class="card-header">
                    <h2 class="card-title">${intern.name}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}}</li>
                    </ul>
                </div>
            </div>
            `
};

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


function generateHTML(teamArr) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>The Squawd</title>
</head>
<body>
<section class="container col l-11">
<div class = "col m12 teal lighten-2"> Team Profile Generator</div>

    ${renderTeamArr(teamArr)}

</section>
</body>
</html>`
}




module.exports = generateHTML;