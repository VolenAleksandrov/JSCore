/**
 * Created by vo13n on 10-Jul-17.
 */
function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
let expect = require('chai').expect;
describe('Add / Subtract', function () {
    let calc;
    beforeEach(()=>{
        calc = createCalculator();
    });

   it("Should return an object", function () {
       expect(typeof calc).to.equal('object');
   });
   it("Should have 0 value when created", () =>{
       expect(calc.get()).to.equal(0);
   });
   it("Should add", () => {
       calc.add(3);
       calc.add(5);
       expect(calc.get()).to.equal(8);
   });
   it("Should subtract", () =>{
       calc.add(3.14);
       calc.subtract(1.13);
       expect(calc.get()).to.be.closeTo(2.01, 0.001);
   });
    it("Should work with negative numbers", () =>{
        calc.add(-4);
        calc.subtract(-3);
        expect(calc.get()).to.equal(-1);
    });
    it("Should not add NaNs", () =>{
        calc.add('pesho');
        expect(calc.get()).to.be.NaN;
    });
    it("Should not subtract NaNs", () =>{
        calc.subtract('gosho');
        expect(calc.get()).to.be.NaN;
    });
    it("Should subtract string nums", () =>{
        calc.subtract('7');
        expect(calc.get()).to.equal(-7);
    });
    it("Should add string nums", () =>{
        calc.add('2');
        expect(calc.get()).to.equal(2);
    });
});