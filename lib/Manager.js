const Employee = require('./Employee');
// class Manager {
//     constructor(name, id, email, office){
//         this.name = name;
//         this.id = id;
//         this.email = email;
//         this.office = office;
//     }

    
// }

class Manager extends Employee {
    constructor (name, id, email, office) {
        super (name, id, email);

        this.office = office;
    }

    getRole () {
        return "Manager";
    }
}




module.exports = Manager;