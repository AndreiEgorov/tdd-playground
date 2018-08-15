const oneAway = require("../_lib/one-away.js")

describe("oneAway", () =>{
    describe("when at least one of the inputs is not a string", () => {
        it("should throw an error", () =>{
            const result = oneAway("oneword", 123);
            expect(result).toEqual(0)
        })
    } ) 
})


describe("oneAway", () =>{
    describe("when there are fewer than two strings", () => {
        it("should throw an error", () =>{
            const result = oneAway("oneword");
            expect(result).toEqual(0)
        })
    } ) 
})

describe("oneAway", () => {
    describe("when there are more than two strings", ()=>{
        it("should throw an error", ()=>{
            const result = oneAway("oneword","twoword", "threeword")
            expect(result).toEqual(false)
        })
    })
})
describe("oneAway", () => {
    describe("when the words are more than one edit apart", ()=>{
        it("should return false", ()=>{
            const result = oneAway("pale", "palllll")
            expect(result).toEqual(false)
        })
    })
})
describe("oneAway", () => {
    describe("when the words are one edit apart", ()=>{
        it("should return true", ()=>{
            const result = oneAway("car", "bar")
            expect(result).toEqual(true)
        })
    })
})