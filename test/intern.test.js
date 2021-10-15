//adding in required js for testing
const Intern = require('../lib/intern')



describe('Intern',()=>{
    it('should create an intern object', () => {

        const intern = new Intern("Jay", 11, "email@email.com", "UT Austin")

    expect(intern.name).toEqual("Jay");
    expect(intern.id).toEqual(11);
    expect(intern.email).toEqual("email@email.com");
    expect(intern.school).toEqual("UT Austin");
    });
    
    it('should return the school', () =>{
        
        const intern = new Intern("Jay", 11, "email@email.com", "UT Austin")

    expect(intern.getSchool()).toEqual("UT Austin")
    })
    
    it('should return intern role',() => {

        const intern = new Intern("Jay", 11, "email@email.com", "UT Austin")
        expect(intern.getRole()).toEqual("Intern")
    })
})