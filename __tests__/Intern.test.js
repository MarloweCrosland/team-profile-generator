const Intern = require('../lib/Intern.js');

test('creates manager object', () => {
    const intern = new Intern('marlowe', '12', 'hello.com', 'school');

    expect(intern.name.length).toBeGreaterThan(0);
    expect(intern.id);
    expect(intern.email);
    expect(intern.school.length).toBeGreaterThan(0);
});

