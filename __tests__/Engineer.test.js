const Engineer = require('../lib/Engineer.js');

test('creates manager object', () => {
    const engineer = new Engineer('marlowe', '12', 'hello.com', '8');

    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id.length).toBeGreaterThan(0);
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office.length).toBeGreaterThan(0);
});

