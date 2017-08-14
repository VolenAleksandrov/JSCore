/**
 * Created by vo13n on 12-Jul-17.
 */
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let nuke = function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
};


describe("Armagedom Unit tests", function () {
    let targerHtml;
    beforeEach(function () {
        document.body.innerHTML = `
    <div id="target">
        <div class="nested target">
            <p>This is some text</p>
        </div>
        <div class="target">
            <p>Empty div</p>
        </div>
        <div class="inside">
            <span class="nested">Some more text</span>
            <span class="target">Some more text</span>
        </div>
    </div>`;
        targerHtml = $('#target');
    });

    it("with valid and with invalid selector (should not change)", function () {
        let selector1 = $('.inside');
        let selector2 = 2;
        let oldHtml = targerHtml.html();
        nuke(selector1, selector2);
        expect(targerHtml.html()).to.be.equal(oldHtml, "Html has changed");
    });
    it("with two equal selectors (should not change)", function () {
        let selector1 = $('.inside');
        let oldHtml = targerHtml.html();
        nuke(selector1, selector1);
        expect(targerHtml.html()).to.be.equal(oldHtml, "Html has changed");
    });
    it("with two valid selectors(should change)", function () {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        let oldHtml = targerHtml.html();
        nuke(selector1, selector2);
        expect(targerHtml.html()).to.not.equal(oldHtml, "Html did not change!");
    });
    it("with two valid selectors(should not remove anything)", function () {
        let selector1 = $('.nested');
        let selector2 = $('.inside');
        let oldHtml = targerHtml.html();
        nuke(selector1, selector2);
        expect(targerHtml.html()).to.be.equal(oldHtml, "Html has changed!");
    });
});