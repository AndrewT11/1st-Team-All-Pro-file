//adding in required js for testing
const Engineer = require('../lib/engineer')
const engineer = require('../lib/engineer')

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an engineer object', () => {

            const engineer = new Engineer ("Corbin", 13, 'corbin@corbin.com', "corbin123");
         
        expect(engineer.name).toEqual("Corbin");
        expect(engineer.id).toEqual(13);
        expect(engineer.email).toEqual("corbin@corbin.com");
        expect(engineer.github).toEqual('corbin123');
        })

        it('should return the github', () => {
            
            const engineer = new Engineer ("Corbin", 13, 'corbin@corbin.com', 'corbin123');
        
        expect(engineer.getGithub()).toEqual('corbin123');
        });

        it('returns the Engineer\'s role', () => { 

        const engineer = new Engineer ("Corbin", 13, 'corbin@corbin.com', 'corbin123');

        expect(engineer.getRole()).toEqual('Engineer');
        });
    });
})