const Employee = require('./lib/Employee.js');

test('creates an employee object'), () => {
    const employee = new Employee('marlowe');

    expect(teamData.name.length).toBeGreaterThan(0);
    expect(teamData.id).toEqual(expect.any(Number));
    expect(teamData.email).toEqual(expect.any(String));
    expect(teamData.office.length).toBeGreaterThan(0);
};


module.exports(Employee);