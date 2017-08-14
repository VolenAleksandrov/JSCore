/**
 * Created by vo13n on 10-Jul-17.
 */
function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}
//#C89664 - 200, 150, 100
console.log(rgbToHexColor(200, 150, 100));
let expect = require('chai').expect;
describe('Test rgbToHex', function () {
    it("Should return #C89664 for 200, 150, 100", function () {
        expect(rgbToHexColor(200, 150, 100)).to.equal("#C89664");
    });
    it("Should return #FF9EAA for 255, 158, 170", function () {
        expect(rgbToHexColor(255, 158, 170)).to.equal("#FF9EAA");
    });
    it("Should return #000000 for 0, 0, 0", function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
    it("Should return #0C0D0E for 12, 13, 14", function () {
        expect(rgbToHexColor(12, 13, 14)).to.equal("#0C0D0E");
    });
    it("Should return #FFFFFF for 255, 255, 255", function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });
    it("Should return undefined for 260, 150, 100", function () {
        expect(rgbToHexColor(260, 150, 100)).to.equal(undefined);
    });
    it("Should return undefined for 'asd', 150, 100", function () {
        expect(rgbToHexColor('asd', 150, 100)).to.equal(undefined);
    });
    it("Should return undefined for 100, 'asd', 100", function () {
        expect(rgbToHexColor(100, 'asd', 100)).to.equal(undefined);
    });
    it("Should return undefined for 1, 2, 'asd'", function () {
        expect(rgbToHexColor(1, 2, 'asd')).to.equal(undefined);
    });
    it("Should return undefined for 100, 290, 100", function () {
        expect(rgbToHexColor(100, 290, 100)).to.equal(undefined);
    });
    it("Should return undefined for 100, 200, 300", function () {
        expect(rgbToHexColor(100, 200, 300)).to.equal(undefined);
    });
    it("Should return undefined for -100, 150, 100", function () {
        expect(rgbToHexColor(-100, 150, 100)).to.equal(undefined);
    });
    it("Should return undefined for 100, -150, 100", function () {
        expect(rgbToHexColor(100, -150, 100)).to.equal(undefined);
    });
    it("Should return undefined for 100, 150, -100", function () {
        expect(rgbToHexColor(100, '150', -100)).to.equal(undefined);
    });
    it("Should return undefined for 3.14, 150, 100", function () {
        expect(rgbToHexColor(3.14, 150, 100)).to.equal(undefined);
    });
    it("Should return undefined for 100, 150, 3.13", function () {
        expect(rgbToHexColor(100, 150, 3.13)).to.equal(undefined);
    });
    it("Should return undefined for 100, 3.14, 100", function () {
        expect(rgbToHexColor(100, 3.14, 100)).to.equal(undefined);
    });
    it("Should return undefined for '5', [3], {8:9}", function () {
        expect(rgbToHexColor('5', [3], {8:9})).to.equal(undefined);
    });
});