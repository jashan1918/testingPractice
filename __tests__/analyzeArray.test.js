const analyzeArray = require ("../src/analyzeArray.js")

describe ("Tests for analyzeArray function", () => {
    
    test("To Test the analyzeArray function with generic data", () => {

        expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
    })

    test("to test with a single value array0", () => {

        expect(analyzeArray([5])).toEqual({average: 5, min: 5, max: 5, length: 1})
    })

    test("test when the array sent is empty", () => {
        expect(() => analyzeArray([])).toThrow("Array cannot be empty")
    })
})