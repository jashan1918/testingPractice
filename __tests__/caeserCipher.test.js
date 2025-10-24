const caeserCipher = require ("../src/caeserCipher.js")

describe("tests for the Ceaser Cipher", () => {

    test("An input string should return a ciphered version", () => {
        expect(caeserCipher("abcde", 1)).toBe("bcdef")
    })

    test("testing the ceaserCipher with different shift factor", () => {
        expect(caeserCipher("abcdefghijklmnopqrstuvwxyz", 7)).toBe("hijklmnopqrstuvwxyzabcdefg")
    })

    test("testing the ceaserCiphter if the input has upperCase letters", () => {

            expect(caeserCipher("A", 3)).toBe("D");
    })

    test("testing if there is a non alphabet in the string", () => {

        expect(caeserCipher("abc123", 3)).toBe("def123")
    })
    
    
})