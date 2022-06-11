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
})