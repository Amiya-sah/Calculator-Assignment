const { it } = require("@jest/globals")

describe('Calculator', () => {
    //test case to check wheather the initial value is zero or not
    it('should return 0 for an empty string', () => {
        const Module = require("./calci")
        const calculator = new Module()
        calculator.add("")
        expect(calculator.value).toBe(0)
    })
    //test case to check wheather 2 numbers are getting added
    it('should add all the numbers (unknown amount) in the string', () => {
        const Module = require("./calci")
        const calculator = new Module()
        calculator.add("1,2,7,9")
        expect(calculator.value).toBe(19)

    })
    it('should throw an exception with a negative number passed and show all negatives', () => {
        const Module = require("./calci")
        const calculator = new Module()
        expect( function(){calculator.add("1,-2,-7,-9"); } ).toThrow(new Error("negatives numbers not allowed, passed -2-7-9..."))

    })
    it('should allow new line in the string', () => {
        const Module = require("./calci")
        const calculator = new Module()
        calculator.add("1\n2,7,9")
        expect(calculator.value).toBe(19)

    })

    it('should accept different delimiters in the string', () => {
        const Module = require("./calci")
        const calculator = new Module()
        calculator.add("1;2;3:4_5")
        expect(calculator.value).toBe(15)

    })
})