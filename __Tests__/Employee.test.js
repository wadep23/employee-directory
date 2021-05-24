const { expect } = require("@jest/globals");
const Employee = require('../lib/Employee.js');

test('Creates a new Employee object', () => {
    const employee = new Employee('Wade', 'wadepfacer@gmail.com', 'Employee');

    expect(employee.name).toBe('Wade');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toBe('wadepfacer@gmail.com');
    expect(employee.getRole()).toBe('Employee');

    console.log(employee.getRole());

});