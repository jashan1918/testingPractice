const Calculator = require ("../src/calculator.js");

describe("To test the code for class Calculator", () => {



    test ("Test for the add method!", () => {
        const calc = new Calculator(3, 13);
        const result = calc.add();
        expect(result).toBe(16);
    })

    test("Test for float numbers in add method", () => {
        const calc = new Calculator(3.234, 5.543);
        const result = calc.add();
        expect(result).toBeCloseTo(8.777);
    })

    test ("Test for the subtract method", () => {
        const calc = new Calculator(23,12);
        const result = calc.subtract();
        expect(result).toBe(11);
    })

    test ("test for the subtract method if the number is a float", () => {
        const calc = new Calculator(234.234, 432.435)
        const result = calc.subtract();
        expect(result).toBeCloseTo(-198.201)
    })
})