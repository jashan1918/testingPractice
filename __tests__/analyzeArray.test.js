const analyzeArray = require ("../src/analyzeArray.js")

describe ("Tests for analyzeArray function", () => {
    
    test("To Test the analyzeArray function with generic data", () => {

        expect(analyzeArray()).toBe(10);
    })
})