const Employee = require('./Employee')

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
}

module.exports = manager;