/**
 * Created by vo13n on 19-Jul-17.
 */
function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

let expect = require('chai').expect;
describe("Pointy List", function () {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });

    it("should contain all properties", function () {
        expect(myList.addLeft).to.exist;
        expect(myList.addRight).to.exist;
        expect(myList.clear).to.exist;
        expect(myList.toString).to.exist;
    });
    it('should start empty', function () {
       expect(myList.toString()).to.equal('', 'did not starts empty');
    });
    it('should add element on the left', function () {
        myList.addLeft(3);
        expect(myList.toString()).to.equal('3', 'did not add correct');
    });
    it('should add element on the right', function () {
        myList.addRight(3);
        expect(myList.toString()).to.equal('3', 'did not add correct');
    });
    it('should add elements on the left', function () {
        myList.addLeft(3);
        myList.addLeft(7);
        myList.addLeft(9);
        expect(myList.toString()).to.equal('9, 7, 3', 'did not add correct');
    });
    it('should add elements on the right', function () {
        myList.addRight(3);
        myList.addRight(7);
        myList.addRight(9);
        expect(myList.toString()).to.equal('3, 7, 9', 'did not add correct');
    });
    it('should clear list correct', function () {
        myList.addLeft(3);
        myList.addRight(4);
        myList.clear();
        expect(myList.toString()).to.equal('', 'did not clear all elements');
    });
    it('should add elements left and right correctly', function () {
        myList.addLeft(3);
        myList.addRight(5);
        myList.addLeft(6);
        myList.addRight(7);
        expect(myList.toString()).to.equal('6, 3, 5, 7', 'did not add element left and right correct');
    })
});