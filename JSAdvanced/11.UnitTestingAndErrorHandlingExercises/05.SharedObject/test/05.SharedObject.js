/**
 * Created by vo13n on 11-Jul-17.
 */
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `
<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('Shared object Unit tests', function () {
    describe('Initial value tests', function () {
        it('test name initial value', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('test income initial value', function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe('Change name unit tests', function () {
        it('test with empty string name should be null', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('test with non-empty string (name should not e null', function () {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.equal('Pesho', 'Name did not change correct');
        });
        describe('Name input tests', function () {
            it('test with empty string name should be null', function () {
                sharedObject.changeName('Nakov');
                sharedObject.changeName('');
                let nameTxtValue = $('#name');
                expect(nameTxtValue.val()).to.be.equal('Nakov');
            });
            it('test with non-empty string (name should not e null', function () {
                sharedObject.changeName('Pesho');
                expect(sharedObject.name).to.equal('Pesho', 'Name did not change correct');
            });
        });
    });
    describe('Change income unit tests', function () {
        it('with a string  (should stay null)', function () {
        sharedObject.changeIncome('d');
        expect(sharedObject.income).to.be.null;
        });
        it('with a correct value (should change correctly)', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(3.11);
            expect(sharedObject.income).to.be.equal(5, 'Income did not change correctly!');
        });

        it('with a floating-point (should stay null)', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(3.11);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with negative number (should stay null)', function () {
            sharedObject.changeIncome(3);
            sharedObject.changeIncome(-3);
            expect(sharedObject.income).to.be.equal(3);
        });
        it('with zero (should not change)', function () {
            sharedObject.changeIncome(3);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(3);
        });
        describe('Income input tests', function () {
            it('with a string (should not change )', function () {
                sharedObject.changeIncome(3);
                sharedObject.changeIncome('d');
                let incomeText = $('#income');
                expect(incomeText.val()).to.be.equal('3');
            });
            it('with a correct value (should change correctly)', function () {
                sharedObject.changeIncome(7);
                let incomeText = $('#income');
                expect(incomeText.val()).to.be.equal('7');
            });
            it('with a floating-point (should not change )', function () {
                sharedObject.changeIncome(3);
                sharedObject.changeIncome(3.11);
                let incomeText = $('#income');
                expect(incomeText.val()).to.be.equal('3');
            });
            it('with a negative number (should not change )', function () {
                sharedObject.changeIncome(3);
                sharedObject.changeIncome(-2);
                let incomeText = $('#income');
                expect(incomeText.val()).to.be.equal('3');
            });
            it('with a zero (should not change )', function () {
                sharedObject.changeIncome(3);
                sharedObject.changeIncome(0);
                let incomeText = $('#income');
                expect(incomeText.val()).to.be.equal('3');
            });
        });
    });
    describe('UpdateName tests', function () {
        it('with an emty string (should not change property', function () {
            sharedObject.changeName("Viktor");
            let nameEl = $('#name');
            nameEl.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal("Viktor");
        });
        it('with a non-empty string (should change property', function () {
            sharedObject.changeName("Koko");
            let nameEl = $('#name');
            nameEl.val('Dinev');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('Dinev');
        });
    });
    describe('Update income tests', function () {
        it('with a string (should not change income property', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('income');
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(3);
        });
        it('with a floationg-point (should not change income property', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('3.11');
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(3);
        });
        it('with a negative (should not change income property', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('-1');
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(3);
        });
        it('with a zero (should not change income property', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(3);
        });
        it('with a positive integer (should change income property', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val(1);
            sharedObject.updateIncome();
            expect(sharedObject.income).equal(1);
        });
    })
});