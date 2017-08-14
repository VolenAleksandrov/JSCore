/**
 * Created by vo13n on 11-Jul-17.
 */
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
let expect = require('chai').expect;
describe("Test look up char", function () {
    it('with a non-string first parameter, should return undefined', function () {
        expect(lookupChar(13, 0)).to.equal(undefined, "The function did not return the correct result!");
    });
    it('with a non-number second parameter, should return undefined', function () {
        expect(lookupChar('pesho', 'gosho')).to.equal(undefined,
            "The function did not return the correct result!");
    });
    it('with a floating point number second parameter, should return undefined', function () {
        expect(lookupChar("pesho", 3.12)).to.equal(undefined,
            "The function did not return the correct message!");
    });
    it('with a incorrect index value, should return incorectIndex', function () {
        expect(lookupChar('pesho', 13)).to.equal('Incorrect index',
            "The function did not return the correct value!");
    });
    it('with a negative index value, should return incorectIndex', function () {
        expect(lookupChar('pesho', -1)).to.equal('Incorrect index',
            "The function did not return the correct value!");
    });
    it('with a index value equal to string length, should return incorectIndex', function () {
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index',
            "The function did not return the correct value!");
    });
    it('with correct parameters, should return correct value', function () {
        expect(lookupChar('pesho', 0)).to.equal('p',
            "The function did not return the correct result!");
    });
    it('with correct parameters, should return correct value', function () {
        expect(lookupChar('stamat', 3)).to.equal('m',
            "The function did not return the correct result!");
    });
});