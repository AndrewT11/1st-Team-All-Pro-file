const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {

        //calls Employee constructor
        super(name, id, email);
        this.school = school;
    }
}

getSchool()

getRole(
    returns 'Intern';
)

module.exports = Intern;