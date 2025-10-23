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

    test("test for the multiply method", () => {
        const calc = new Calculator(3, 5);
        const result = calc.multiply();
        expect(result).toBe(15);
    })

    test("test for the multiply method if the inputs are flaot", () => {
        const calc = new Calculator(23.234, 12.978);
        const result = calc.multiply();
        expect(result).toBeCloseTo(301.530852)
    })

    test("test for the divide method", () => {
        const calc = new Calculator(15, 3);
        const result = calc.divide();
        expect(result).toBe(5);
    })

    test("test for the divide method when the input is float", () => {
        const calc = new Calculator(234.434, 213.675);
        const result = calc.divide();
        expect(result).toBeCloseTo(1.09715221715)
    })
})