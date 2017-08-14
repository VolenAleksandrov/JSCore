/**
 * Created by vo13n on 20-Jul-17.
 */
let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();
let expect = require('chai').expect;

describe('Add Delete in list Tests', function () {
    let lis;
    beforeEach(function () {
         lis = (function () {
             return list;
         })();
    });
    it('should start with empty list', function () {
        expect(lis.toString()).to.equal('', "did not start empty");
    });
    it("should correctly add data with correct index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.add(true);
        expect(lis.toString()).to.equal("5, pesho, true");
    });
    it("should correctly delete data with correct index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.delete(0);
        expect(lis.delete(0)).to.equal("pesho");
    });
    it("should return undefined with incorrect index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.delete(34);
        expect(lis.delete(34)).to.equal(undefined);
    });
    it("should return undefined with incorrect index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.delete(3.4);
        expect(lis.delete(3.4)).to.equal(undefined);
    });
});