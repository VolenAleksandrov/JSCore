/**
 * Created by vo13n on 10-Jul-17.
 */
function sum(arr) {
    let sum = 0;
    for(let num of arr){
        sum += Number(num);
    }
    return sum;
}
let expect = require('chai').expect;
describe('Test summator', function () {
    it("Should return 3 for [1, 2]", function () {
        expect(sum([1, 2])).to.equal(3);
    });
    it("Should return 0 for []", function () {
        expect(sum([])).to.equal(0);
    });it("Should return 3 for ['1', '2']", function () {
        expect(sum(['1', '2'])).to.equal(3)
    })
});