/**
 * Created by vo13n on 27-Jun-17.
 */
function extractText() {
    let arr = [];
    $('ul#items li').each((index, element) => arr.push(element.textContent));
    $('#result').text(arr.join(', '));
}
