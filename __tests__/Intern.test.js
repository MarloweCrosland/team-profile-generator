const Intern = require('../lib/Intern.js');

test('creates manager object', () => {
    const intern = new Intern('marlowe', '12', 'hello.com', '8');

    expect(intern.name.length).toBeGreaterThan(0);
    expect(intern.id);
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.office.length).toBeGreaterThan(0);
});

