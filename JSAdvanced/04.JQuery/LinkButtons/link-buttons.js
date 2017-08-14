/**
 * Created by vo13n on 28-Jun-17.
 */
function attachEvents() {
    $('a.button').on('click', buttonClicked);

    function buttonClicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}