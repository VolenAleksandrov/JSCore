/**
 * Created by vo13n on 11-Jul-17.
 */
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
let expect = require('chai').expect;
describe('Math enforcer', function () {
    describe('addFive', function () {
        it('with a string (should return undefined)', function () {
            let result = mathEnforcer.addFive('nakov');
            expect(result).to.be.undefined;
        });
        it('with a positive number (should return correct value)', function () {
            let result = mathEnforcer.addFive(5);
            expect(result).to.be.equal(10, 'Add five function did not return correct value!');
        });
        it('with a negative number (should return correct value)', function () {
            let result = mathEnforcer.addFive(-5);
            expect(result).to.be.equal(0, 'Add five function did not return correct value!');
        });
        it('with a flaoting point number (should return correct value)', function () {
            let result = mathEnforcer.addFive(5.3);
            expect(result).to.be.closeTo(10.3, 0.01);
        });
    });
    describe('subtract ten', function () {
        it('with a string (should return undefined)', function () {
            let result = mathEnforcer.subtractTen('nakov');
            expect(result).to.be.undefined;
        });
        it('with a positive number (should return correct value)', function () {
            let result = mathEnforcer.subtractTen(5);
            expect(result).to.be.equal(-5, 'Subtract ten function did not return correct value!');
        });
        it('with a negative number (should return correct value)', function () {
            let result = mathEnforcer.subtractTen(-21);
            expect(result).to.be.equal(-31, 'Subtract ten function did not return correct value!');
        });
        it('with a flaoting point number (should return correct value)', function () {
            let result = mathEnforcer.subtractTen(5.3);
            expect(result).to.be.closeTo(-4.7, 0.01);
        });
    });
    describe('sum', function () {
        it('with a string on first number(should return undefined)', function () {
            let result = mathEnforcer.sum('nakov', 0);
            expect(result).to.be.undefined;
        });
        it('with a positive number first number (should return correct value)', function () {
            let result = mathEnforcer.sum(5, 3);
            expect(result).to.be.equal(8, 'Subtract ten function did not return correct value!');
        });
        it('with a negative number first number (should return correct value)', function () {
            let result = mathEnforcer.sum(-2, 4);
            expect(result).to.be.equal(2, 'Subtract ten function did not return correct value!');
        });
        it('with a flaoting point number first number (should return correct value)', function () {
            let result = mathEnforcer.sum(5.3, 4);
            expect(result).to.be.closeTo(9.3, 0.01);
        });
        it('with a string on second number(should return undefined)', function () {
            let result = mathEnforcer.sum(0, 'nakov');
            expect(result).to.be.undefined;
        });
        it('with a positive number second number (should return correct value)', function () {
            let result = mathEnforcer.sum(5, 3);
            expect(result).to.be.equal(8, 'Subtract ten function did not return correct value!');
        });
        it('with a negative number second number (should return correct value)', function () {
            let result = mathEnforcer.sum(2, -4);
            expect(result).to.be.equal(-2, 'Subtract ten function did not return correct value!');
        });
        it('with a flaoting point number second number (should return correct value)', function () {
            let result = mathEnforcer.sum(5, 4.7);
            expect(result).to.be.closeTo(9.7, 0.01);
        });
    });
});