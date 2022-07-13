const Engineer = require('../lib/Engineer.js');

test('creates manager object', () => {
    const engineer = new Engineer('marlowe', '12', 'hello.com', 'username');

    expect(engineer.name.length).toBeGreaterThan(0);
    expect(engineer.id.length).toBeGreaterThan(0);
    expect(engineer.email);
    expect(engineer.github.length).toBeGreaterThan(0);
});


