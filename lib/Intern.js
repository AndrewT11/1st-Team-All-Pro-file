const Employee = require('./Employee')

//need to test creating an object
class Intern extends Employee {
    constructor(name, id, email, school) {

        //calls Employee constructor
        super(name, id, email);
        this.school = school;
        this.role = "Intern"

    }

    getSchool() {
     return this.school 
    }

    getRole(){
        return 'Intern';
    }
  

}

module.exports = Intern;

