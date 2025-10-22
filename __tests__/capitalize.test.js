const capitalize = require ("../src/capitalize.js")

describe ("capitalize checking", () => {

    test ("check if the first letter is capitalized", () => {
        
        expect(capitalize("hello")).toBe("Hello");
    })

    test("check for first letter capitalization if there are numbers in the string", () => {
            expect(capitalize("h123")).toBe("H123");

    })

    test("check if the empty string return an empty string", () => { 
            expect(capitalize("")).toBe("");
    })

    test("Throw error if input is not a string", () => {
        expect(() => capitalize(123)).toThrow("Input must be a string");
    })
})