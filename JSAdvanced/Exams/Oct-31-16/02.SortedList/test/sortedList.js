/**
 * Created by vo13n on 18-Jul-17.
 */
class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}
let expect = require('chai').expect;
describe('Sorted list Unit Tests', function () {
    let myList;
    beforeEach(function () {
        myList = new SortedList();
    });
    it('should have all of the functions in its prototype', function () {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true, 'no add()');
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true, 'no remove()');
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true, 'no get()');
    });
    it('should have property getter',function () {
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true, 'no size getter');
        expect(typeof myList.size).to.not.equal('function', 'Property size is function');
    });
    it('should add and get elements correctly', function () {
        myList.add(4);
        expect(myList.get(0)).to.equal(4, 'Did not add element');
    });
    it('should have working add and remove functions', function () {
        myList.add(3);
        myList.add(4);
        myList.remove(0);
        expect(myList.get(0)).to.equal(4, 'did not working correct');
    });
    it('should sort correct after add', function () {
        myList.add(8);
        expect(myList.get(0)).to.equal(8, 'did not add');
        myList.add(4);
        expect(myList.get(0)).to.equal(4, 'was not sorted');
        expect(myList.get(1)).to.equal(8, 'was not sorted');
    });
    it('should be sorted after remove', function () {
        myList.add(1);
        myList.add(2);
        myList.add(3);
        myList.add(4);
        expect(myList.get(0)).to.equal(1, 'element was not added');
        myList.remove(0);
        expect(myList.get(0)).to.equal(2, 'element is not removed');
        expect(myList.get(1)).to.equal(3, 'list is not sorted');
    });
    it('should not work remove function with negative index', function () {
        myList.add(3);
        myList.add(5);
        expect(() => myList.remove(-1)).to.throw(Error);
    });
    it('should not working get with negative index', function () {
        expect(() => myList.get(-1)).to.throw(Error);
    });
    it("should not remove with empty collection", function() {
        expect(() => myList.remove(0)).to.throw(Error);
    });

    it("should not get with empty collection", function() {
        expect(() => myList.get(0)).to.throw(Error);
    });

    it("should have working size property", function() {
        expect(myList.size).to.equal(0, "Empty collection had wrong size.");
        myList.add(1);
        myList.add(2);
        expect(myList.size).to.equal(2, "Collection size was wrong.");
        myList.add(3);
        expect(myList.size).to.equal(3, "Collection size was wrong.");
        myList.remove(1);
        myList.remove(1);
        expect(myList.size).to.equal(1, "Collection size was wrong.");
    });
});