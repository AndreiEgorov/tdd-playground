const palindrome = require('../_lib/palindrome.js')


describe("palindrome", () => {
    describe("when a there is a value", () => {
        it("should check if the type is string", () => {
            const result = palindrome("mystring")
            expect(result).toEqual(true)
        })
    })
}),


describe("palindrome", () => {
    describe("when a there is a string", () => {
        it("should check if a word is a palindrome", () => {
            const result = palindrome("mom")
            expect(result).toEqual(true)
        })
    })
})

describe("palindrome", () => {
    describe("when the string is a sentence", () => {
        it("should check if a sentence is a palindrome", () => {
            const result = palindrome("never odd or even")
            expect(result).toEqual(true)
        })
    })
})


