/**
 * Created by vo13n on 18-Jul-17.
 */
function generateSummary(selector) {
    $(selector).on('click', function () {
        let summaryText = $('#content strong');
        createSummary(summaryText);
    });
    function createSummary(summaryText) {
        let summary = $('<div>');
        summary.attr('id', 'summary');
        let title = $('<h2>').text('Summary');
        let paragraph = $('<p>').text(summaryText);

        summary.append(title);
        summary.append(paragraph);
        let parent = $('#content').parent();
        parent.append(summary);
    }
}
function solve(button) {
    $(button).click(summarize);

    function summarize() {
        let content = $('#content');
        let parent = content.parent();
        let summary = $(`<div id="summary"><h2>Summary</h2></div>`);
        let summaryPar = $(`<p></p>`);
        summary.append(summaryPar);
        let strong = content.find('strong');

        for (let elem of strong) {
            summaryPar.append(elem.textContent);
        }

        parent.append(summary);
    }
}