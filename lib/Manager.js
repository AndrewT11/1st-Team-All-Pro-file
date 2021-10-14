const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, idk, email, officeNumber) {
        
        //calls Employee constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;