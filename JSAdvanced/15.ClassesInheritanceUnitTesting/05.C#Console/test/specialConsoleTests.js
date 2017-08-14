/**
 * Created by vo13n on 17-Jul-17.
 */
let Console = require('../specialConsole').Console;
let expect = require('chai').expect;

describe("class Console", function () {
    it("should return the same string for single string argument", function () {
        let string = "One single string";
        expect(Console.writeLine(string)).to.equal(string);
    });
    it("should return JSON string for single object", function () {
        let object = {name : 'Pesho', age : 12};
        expect(Console.writeLine(object)).to.equal(JSON.stringify(object));
    });
    it("should return Type error id first parameter is string", function () {
        expect(() => Console.writeLine(5, 1, 2)).to.throw(TypeError)
    });
    it("should return RangeError for incorrect parameters", function () {
        let str = "this {0} will {0} replaced!";
        expect(() => Console.writeLine(str,'one','be')).to.throw(RangeError)
    });
    it("should return RangeError for incorrect parameters", function () {
        let str = "This {0} should {1} replaced.";
        expect(() => Console.writeLine(str,'one','be','three','four')).to.throw(RangeError)
    });
    it("should successfully replace placeholders with valid arguments", function () {
        let str = "This {0} should {1} replaced.";
        expect(Console.writeLine(str, "one", "be")).to.equal("This one should be replaced.");
    });
    it("should return Range Error for incorrect parameters", function () {
        expect(() => Console.writeLine("Not {10}", "valid")).to.throw(RangeError);
    });
});