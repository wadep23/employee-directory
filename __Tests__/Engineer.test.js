const { expect, test } = require("@jest/globals");
const Engineer = require('../lib/Engineer.js');

test('Creates a new Engineer object from Employee class', () => {
    const engineer = new Engineer('Wade Facer', 'wadepfacer@gmail.com','', 'wadep23', 'Engineer');

    expect(engineer.name).toBe('Wade Facer');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.github).toBe('wadep23');
    expect(engineer.getGithub()).toBe('www.github.com/wadep23');
    expect(engineer.role).toBe('Engineer');
    console.log(engineer.getRole());

    console.log(engineer);
});