const reverseString = require ("../src/reverseString.js")

describe ("Tests for the reverseString function", () => {

    test ("testing if a normal string is reversed", () => {
        expect(reverseString("nahsaj")).toBe("jashan");
    })

    test ("If the string is empty then it should return empty", () => {

        expect(reverseString("")).toBe("");
    })

    test ("A string with spaces should return a reversed String with spaces", () => {

        expect(reverseString("abc def")).toBe("fed cba");
    })
})