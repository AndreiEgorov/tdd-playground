const unique = require('../_lib/unique-character.js')



describe("unique", () => {
    describe("when the string contains numeric characters", () => {
        it("should throw an error ", () => {
            const result = unique("dddeef1")
            expect(result).toEqual(0)
        })
    } )
})

describe("unique", () => {
    describe("when the string contains unique character", () => {
        it("should return the unique character", () => {
            const result = unique("dddeefgg")
            expect(result).toEqual("f")
        })
    } )
})

describe("unique", () => {
    describe("when all characters are same", () => {
        it("should throw an error", () => {
            const result = unique("ttttt")
            expect(result).toEqual()
        })
    } )
})

describe("unique", () => {
    describe("when there is an empty string", () => {
        it("should throw an error", () => {
            const result = unique("")
            expect(result).toEqual(0)
        })
    } )
})
