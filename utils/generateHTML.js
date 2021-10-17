

function generateHTML(teamArr) {
    // console.log(teamArr)
    const generateTeamArr = function() {
        teamArr.forEach((employee) => {
            console.log(teamArr)
            if (this.role === "Manager") {
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
            } else if (this.role === "Engineer") {
                return `                
                <div class="card employee-card" col-3>
                    <div class="card-header">
                        <h2 class="card-title">${this.name}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">Email: <a href="mailto: ${this.email}">{{ this.email }}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>
                        </ul>
                    </div>
                </div>
                `
            } else {
                return `  
                <div class="card employee-card" col-3>
                    <div class="card-header">
                        <h2 class="card-title">${this.name}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${this.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:{{ email }}">${this.email}</a></li>
                            <li class="list-group-item">School: ${this.school}}</li>
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




// const generateTeamArr = function(teamArr) {
    // teamArr.forEach((employee) => {
        // console.log(teamArr)
    //     if (this.role === "Manager") {
    //         return `
    //         <div col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3>
    //         <div class="card employee-card">
    //             <div class="card-header">
    //                 <h2 class="card-title">${this.name }</h2>
    //                 <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${this.role}</h3>
    //             </div>
    //             <div class="card-body">
    //                 <ul class="list-group">
    //                     <li class="list-group-item">ID: ${this.id}</li>
    //                     <li class="list-group-item">Email: <a href="mailto: ${this.email}">${this.email}</a></li>
    //                     <li class="list-group-item">Office number: ${this.officeNumber}</li>
    //                 </ul>
    //             </div>
    //         </div>
    //         </div>`
    //     } else if (this.role === "Engineer") {
    //         return `
    //         <div col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3>
    //         <div class="card employee-card">
    //             <div class="card-header">
    //                 <h2 class="card-title">${this.name}</h2>
    //                 <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
    //             </div>
    //             <div class="card-body">
    //                 <ul class="list-group">
    //                     <li class="list-group-item">ID: ${this.id}</li>
    //                     <li class="list-group-item">Email: <a href="mailto: ${this.email}">{{ this.email }}</a></li>
    //                     <li class="list-group-item">GitHub: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>
    //                 </ul>
    //             </div>
    //         </div>
    //         </div>`
    //     } else {
    //         return `
    //         <div col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3>
    //         <div class="card employee-card">
    //             <div class="card-header">
    //                 <h2 class="card-title">${this.name}</h2>
    //                 <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${this.role}</h3>
    //             </div>
    //             <div class="card-body">
    //                 <ul class="list-group">
    //                     <li class="list-group-item">ID: ${this.id}</li>
    //                     <li class="list-group-item">Email: <a href="mailto:{{ email }}">${this.email}</a></li>
    //                     <li class="list-group-item">School: ${this.school}}</li>
    //                 </ul>
    //             </div>
    //         </div>
    //         </div>`
    //     }
    // })
}
}
module.exports = generateHTML;