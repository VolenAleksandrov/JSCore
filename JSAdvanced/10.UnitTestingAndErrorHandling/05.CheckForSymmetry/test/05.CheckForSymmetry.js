/**
 * Created by vo13n on 10-Jul-17.
 */
function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) === JSON.stringify(reversed));
    return equal;
}
let expect = require('chai').expect;
describe('Test checkForSymmetry', function () {
    it("Should return true for [1, 2, 3, 3, 2, 1]", function () {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.equal(true);
    });
    it("Should return false for [1, 2, 3, 4]", function () {
        expect(isSymmetric([1, 2, 3, 4])).to.equal(false);
    });
    it("Should return false for 123", function () {
        expect(isSymmetric(123)).to.equal(false);
    });
    it("Should return true for ['asd', 'dsa', 'dsa', 'asd']", function () {
        expect(isSymmetric(['asd', 'dsa', 'dsa', 'asd'])).to.equal(true);
    });
    it("Should return false for 'asdasd'", function () {
        expect(isSymmetric('asdasd')).to.equal(false);
    });
    it("Should return true for [5, 'hi', {a:5}, new Date(), {a:5}, 'hi', '5']", function () {
        expect(isSymmetric([5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5])).to.equal(true);
    })
});