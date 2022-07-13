const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const manager = new Manager('marlowe', '12', 'hello.com', '8');

    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id);
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office.length).toBeGreaterThan(0);
});

