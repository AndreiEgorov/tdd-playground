const compression = require('../_lib/string-compression.js')

describe("compression", () => {
    describe("when the string contains numeric characters", () => {
        it("should remove numbers from the string ", () => {
            const result = compression("1aab3bcc")
            expect(result).toEqual(a2b2c2)
        })
    } )
} )

describe("compression", () => {
    describe("when there is a string of letters", () => {
        it("should return a compressed string", () => {
            const result = compression("aabbcc")
            expect(result).toEqual("a1b1c1")
        })
    })
})

describe("compresion", () => {
    desribe("when there is a string with spaces", () => {
        it("should return a compressed string with no spaces", () => {
            const result =  compression("bboc rroods ddlla")
            expect (result).toEqual(b2o1c1r2o2d1s1d2l2a1)
        })
    })
} )

describe("compresion", () => {
    desribe("when there are punctuation marks in a string", () => {
        it("should return a compressed string with no punctuation", () => {
            const result =  compression("bboc!rroods?ddlla,")
            expect (result).toEqual(b2o1c1r2o2d1s1d2l2a1)
        })
    })
} )
describe("compresion", () => {
    desribe("when there are uppercase characters ", () => {
        it("should return a compressed string with no punctuation", () => {
            const result =  compression("bboc!rroods?ddlla,")
            expect (result).toEqual(b2o1c1r2o2d1s1d2l2a1)
        })
    })
} )