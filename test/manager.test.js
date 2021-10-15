//adding in required js for testing
const Manager = require('../lib/manager')

describe('Manager', () => {
    it('should create a manager object', () => {
        
        const manager = new Manager("Chris", 12, "chris@chrisstallcup.com", 105)
    expect(manager.name).toEqual("Chris");
    expect(manager.id).toEqual(12);
    expect(manager.email).toEqual("chris@chrisstallcup.com")
    expect(manager.officeNumber).toEqual(105)
    });

    it.todo('should get the manager\'s office number', () => {
    
        const manager = new Manager("Chris", 12, "chris@chrisstallcup.com", 105)
    expect(manager.officeNumber).toEqual('105')
    });

    it.todo('should return manager role');

    it.todo('should return manager role');

});