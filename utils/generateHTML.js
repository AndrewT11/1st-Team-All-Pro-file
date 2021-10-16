function generateHTML(data) {
    console.log(data)
    
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
    <section id="container" col-12>`        
    //Should look and work something like this. createElement into flex inline with col-11 will have col-3 move to next row   
        // <div id="teamContainer" col-11>
            // <div class="employeeCard" col-3>
            //     <div id="employeeCardHeader">
            //         <h1 class = "title" id="name"></h1>
            //         <icon col-1>
            //         <div class="employeeTitle" col-2></div>
            //     </div>
            //     <div>
            //         <div id="id"></div>
            //         <div id="email"></div>
            //     if(questionRender === manager) {
            //         <div id="officeNumber"></div>
            //     } else if(questionRender === engineer) {
            //         <div id="github"></div>
            //     } else if(questionRender === intern) {
            //         <div id="school"></div>
            //     } else {
            //         return "";
            //     }
            //     </div>
        //    </div> 
        `</div>
    </section>


    <!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>`
}



module.exports = generateHTML;