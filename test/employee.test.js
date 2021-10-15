//adding in required js for testing
const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create employee object', () => { 
            const employee = new Employee("Aubrey", 14, "aubrey@aubrey.com")
        
        
        expect(employee.name).toEqual("Aubrey")
        expect(employee.id).toEqual(14)
        expect(employee.email).toEqual("aubrey@aubrey.com")
        })
        it("should return employee name", () => {
            const employee = new Employee("Aubrey", 14, "aubrey@aubrey.com")
        
            expect(employee.getName()).toEqual('Aubrey')
        });
        it('should return employee id', () => {

            const employee = new Employee("Aubrey", 14, "aubrey@aubrey.com")
        
        expect(employee.getId()).toEqual(14);
        });
        it('should return employee email', () => {
            const employee = new Employee("Aubrey", 14, "aubrey@aubrey.com")
        expect(employee.getEmail()).toEqual("aubrey@aubrey.com")
        });
        it('should return employee role', () => {
            const employee = new Employee("Aubrey", 14, "aubrey@aubrey.com")
        expect(employee.getRole()).toEqual("Employee")
        });

    })  
})