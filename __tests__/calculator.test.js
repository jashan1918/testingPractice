const Calculator = require ("../src/calculator.js");

describe("To test the code for class Calculator", () => {



    test ("Test for the add method!", () => {
        const calc = new Calculator(3, 13);
        const result = calc.add();
        expect(result).toBe(16);
    })
})