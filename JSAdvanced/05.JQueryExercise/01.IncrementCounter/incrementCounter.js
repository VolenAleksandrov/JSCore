/**
 * Created by vo13n on 28-Jun-17.
 */
function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();

    let textArea = $('<textarea>');
    textArea.addClass('counter');
    textArea.val(0);
    textArea.attr('disabled', 'true');

    let incrementBtn = $('<button>Increment</button>');
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');

    let addBtn = $('<button>Add</button>');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    let list = $('<ul>');
    list.addClass('results');

    $(incrementBtn).on('click', function () {
        textArea.val(+textArea.val() + 1);
    });

    $(addBtn).on('click', function () {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    });

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);
}