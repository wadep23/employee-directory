const { expect, test } = require("@jest/globals");
const Manager = require('../lib/Manager');

test('To create a Manager object', () => {
    const manager = new Manager('Mark Wilson', 'mwilson@wayfair.com', 'Manager');

    expect(manager.name).toBe('Mark Wilson');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toBe('mwilson@wayfair.com');
    // expect(manager.role).toBe('Manager');
    // expect(manager.officeNumber).toEqual(expect.any(String));

    console.log(manager);
    
})