//adding in required js for testing
const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create a manager object', () => {
            
            const manager = new Manager("Chris", 12, "chris@chrisstallcup.com", 105)
        expect(manager.name).toEqual("Chris");
        expect(manager.id).toEqual(12);
        expect(manager.email).toEqual("chris@chrisstallcup.com")
        expect(manager.officeNumber).toEqual(105)
        });

        it('should get the manager\'s office number', () => {
        
            const manager = new Manager("Chris", 12, "chris@chrisstallcup.com", 105)
        expect(manager.officeNumber).toEqual(105)
        });

        it('should return manager role', () => {

            const manager = new Manager("Chris", 12, "chris@chrisstallcup.com", 105)
        expect(manager.getRole()).toEqual("Manager");
        });
    })
});