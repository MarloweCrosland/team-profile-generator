const Employee = require('./Employee');
// class Engineer {
//     constructor(name, id, email, github){
//         this.name = name;
//         this.id = id;
//         this.email = email;
//         this.github = github; }
//  }

class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // returning github from input 
    getGithub () {
        return this.github;
    }

     // override employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 




module.exports = Engineer;

