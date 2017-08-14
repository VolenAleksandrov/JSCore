/**
 * Created by vo13n on 23-Jul-17.
 */
class Sumator {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }
    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }
    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}
let expect = require('chai').expect;
describe("Sumator unit tests", function() {
    let list;
    beforeEach(function () {
        list = new Sumator();
    });
    it("Should start empty", function() {
        expect(list.toString()).to.equal('(empty)');
    });
    describe("add tests", function () {
        it('should have add, sumNums, removeByFilter and toString functions', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true, 'no add()');
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true, 'no sumNums()');
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true, 'no removeByFilter()');
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true, 'no toString()');
        });
        it("should add num element", function () {
            list.add(1);
            expect(list.toString()).to.equal('1');
        });
        it("should add string element", function () {
            list.add("asd");
            expect(list.toString()).to.equal('asd');
        });
        it("should add many elements of different type", function () {
            list.add(3);
            list.add("asd");
            list.add(12.3);
            expect(list.toString()).to.equal('3, asd, 12.3');
        });
        //it("should add object", function () {
        //    list.add(2);
        //    list.add({asd:1});//
        //    expect(list.toString()).to.equal('2, {asd}');
        //});
    });
    describe("sum nums tests", function () {
        it("should sum all elements of type number", function () {
            list.add(4);
            list.add("asd");
            list.add(3.3);
            expect(list.sumNums()).to.equal(7.3);
        });
        it("should return 0 because no num elements", function () {
            list.add("asd");
            list.add("dsad");
            list.add({item: 1});
            expect(list.sumNums()).to.equal(0);
        });
        it("with empty list should return 0", function () {
            expect(list.sumNums()).to.equal(0);
        });
    });
    describe("remove by filter tests", function () {
        it("should remove odd elements", function () {
            list.add(3);
            list.add(5);
            list.add(2);
            list.removeByFilter(x => x % 2 !== 0);
            expect(list.toString()).to.equal('2');
        });
        it("should remove all elements with lenght more than 5", function () {
            list.add("Kiro Vodkata");
            list.add(12);
            list.removeByFilter(x => x.length > 5);
            expect(list.toString()).to.equal('12');
        });
    })
});
