const { expect, test } = require("@jest/globals");
const Intern = require('../lib/Intern.js');

test('To create a new Intern Object with Employee constructor', () => {
    const intern = new Intern('Leonardo Facer', 'lfacer@gmail.com', 'Intern', 'UofU');

    expect(intern.name).toBe('Leonardo Facer');
    expect(intern.school).toBe('UofU');
    expect(intern.email).toBe('lfacer@gmail.com');

    console.log(intern);
})