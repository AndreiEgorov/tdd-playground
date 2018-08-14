
const compression = require('../_lib/string-compression.js')

// describe("compression", () => {
//     describe("when the string contains numeric characters", () => {
//         it("should remove numbers from the string ", () => {
//             const result = compression("1aab3bcc")
//             expect(result).toEqual("aabbcc")
//         })
//     } )
// } )

// describe("compression", () => {
//     describe("when there is a string of letters", () => {
//         it("should return a compressed string", () => {
//             const result = compression("aabbcc")
//             expect(result).toEqual("a1b1c1")
//         })
//     })
// })

// describe("compresion", () => {
//     describe("when there is a string with spaces", () => {
//         it("should return a compressed string with no spaces", () => {
//             const result =  compression("bboc rroods ddlla")
//             expect (result).toEqual("b2o1c1r2o2d1s1d2l2a1")
//         })
//     })
// } )

// describe("compresion", () => {
//     describe("when there are punctuation marks in a string", () => {
//         it("should return a compressed string with no punctuation", () => {
//             const result =  compression("bboc!rroods?ddlla,")
//             expect (result).toEqual("b2o1c1r2o2d1s1d2l2a1")
//         })
//     })
// } )
// describe("compresion", () => {
//     describe("when there are uppercase characters ", () => {
//         it("should return a compressed string with no punctuation", () => {
//             const result =  compression("bboc!rroods?ddlla,")
//             expect (result).toEqual("b2o1c1r2o2d1s1d2l2a1")
//         })
//     })
// } )








// ----------------------
describe("compresion", () => {
    describe("when string contains numbers", () => {
        it("should throw an error", () => {
            const result =  compression("bb1cc2")
            expect (result).toEqual("b2c2")
        })
    })
} )


describe("compresion", () => {
    describe("when string contains repeated characters", () => {
        it("should count characters in place", () => {
            const result =  compression("aabccdaa")
            expect (result).toEqual("a2b1c2d1a2")
        })
    })
} )

describe("compresion", () => {
    describe("when asked to compres not a string", () => {
        it("should error", () => {
            const result =  compression("420")
            expect (result).toEqual(0)
        })
    })
} )

describe("compresion", () => {
    describe("when string contains non-letter chars", () => {
        it("should ignore those, but count the letters", () => {
            const result =  compression("Hello World!!!")
            expect (result).toEqual("H1e1l2o1W1o1r1l1d1")
        })
    })
} )

describe("compresion", () => {
    describe("when is called without an argument", () => {
        it("should throw an error", () => {
            const result =  compression()
            expect (result).toEqual(0)
        })
    })
} )


describe("compresion", () => {
    describe("when is called with an empty string", () => {
        it("should throw an error", () => {
            const result =  compression("")
            expect (result).toEqual(0)
        })
    })
} )