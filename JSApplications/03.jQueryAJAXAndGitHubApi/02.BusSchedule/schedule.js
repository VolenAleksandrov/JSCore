/**
 * Created by vo13n on 31-Jul-17.
 */
let result = (function solve() {
    let currentId = 'depot';
    let oldName = '';
    function depart() {
        let getRequest = {
            method: 'GET',
            url: `https://judgetests.firebaseio.com/schedule/${currentId}.json`,
            success: departBus,
            error: displayError
        };
        $.ajax(getRequest);
    }
    function arrive() {
        $('#info').find('span').text(`Arriving at ${oldName}`);
        $('#depart').prop('disabled', false);
        $('#arrive').prop('disabled', true);
    }
    function departBus(stopInfo) {
        let name = stopInfo.name;
        $('#info').find('span').text(`Next stop: ${name}`);
        currentId = stopInfo.next;
        $('#depart').prop('disabled', true);
        $('#arrive').prop('disabled', false);
        oldName = name;
    }
    function displayError() {
        $('#info').find('span').text('Error');
        $('#depart').prop('disabled', true);
        $('#arrive').prop('disabled', true);
    }

    return {
        depart,
        arrive
    };
})();