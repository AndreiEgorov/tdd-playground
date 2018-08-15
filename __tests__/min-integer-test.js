
const mininteger = require('../_lib/min-integer.js')


describe("mininteger",() => {
    describe("when value is not an array", ()=>{
        it("it should throw an error", () => {
            const result = mininteger("hello")
            expect(result).toEqual(0)
        })
    })
})

describe("mininteger",() => {
    describe("when array contains non-numeric characters ", ()=>{
        it("it should throw an error", () => {
            const result = mininteger([1,4,2, "hi", 6])
            expect(result).toEqual(0)
        })
    })
})

describe("mininteger",() => {
    describe("when array contains non-numeric characters ", ()=>{
        it("it should throw an error", () => {
            const result = mininteger([1,4,2, "hi", 6])
            expect(result).toEqual(0)
        })
    })
})

describe("mininteger",() => {
    describe("when array does not have a missing value", ()=>{
        it("it should add a value to the tail of an array", () => {
            const result = mininteger([1,2,3,4])
            expect(result).toEqual(5)
        })
    })
})
describe("mininteger",() => {
    describe("when one or more values in the array is < 0", ()=>{
        it("it should throw an error", () => {
            const result = mininteger([1,2,-3,4])
            expect(result).toEqual(0)
        })
    })
})
describe("mininteger",() => {
    describe("when there is a missing positive integer", ()=>{
        it("it should return a minimal positive integer", () => {
            const result = mininteger([1,1,2,4])
            expect(result).toEqual(3)
        })
    })
})

