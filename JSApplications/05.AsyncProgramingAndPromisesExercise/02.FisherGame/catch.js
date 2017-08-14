/**
 * Created by vo13n on 04-Aug-17.
 */
function attachEvents() {
    const username = 'peter';
    const pass = 'peter';
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_BkA43ZfvW/';
    const base64auth = btoa(username + ':' + pass);
    const authHeader = {
        'Authorization': 'Basic ' + base64auth,
        'Content-type': 'application/json'
    };

    $('.load').click(loadCatches);
    $('.add').click(addCatch);

    function request(method, endPoint, data) {
        return $.ajax({
            method: method,
            url: baseUrl + endPoint,
            headers : authHeader,
            data: JSON.stringify(data)
        });
    }

    function addCatch() {
        let element = $(this).parent();
        let dataObj = createDataJson(element);
        request("POST", 'biggestCatches', dataObj)
            .then(loadCatches)
            .catch(handleError)
    }

    function loadCatches() {
        request('GET', 'biggestCatches')
            .then(displayAllCatches)
            .catch(handleError)
    }

    function displayAllCatches(data) {
        let catchesDiv = $('#catches');
        catchesDiv.empty();
        for(let el of data){
            catchesDiv.append($(`<div class="catch" data-id="${el._id}"></div>`)
                .append($('<label>')
                    .text('Angler'))
                .append($(`<input type="text" class="angler" value="${el['angler']}"/>`))
                .append($('<label>')
                    .text('Weight'))
                .append($(`<input type="number" class="weight" value="${el['weight']}"/>`))
                .append($('<label>')
                    .text('Species'))
                .append($(`<input type="text" class="species" value="${el['species']}"/>`))
                .append($('<label>')
                    .text('Location'))
                .append($(`<input type="text" class="location" value="${el['location']}"/>`))
                .append($('<label>')
                    .text('Bait'))
                .append($(`<input type="text" class="bait" value="${el['bait']}"/>`))
                .append($('<label>')
                    .text('Capture Time'))
                .append($(`<input type="number" class="captureTime" value="${el['captureTime']}"/>`))
                .append($('<button class="update">Update</button>').click(updateCatch))
                .append($('<button class="delete">Delete</button>').click(deleteCatch))
            )
        }
        function updateCatch() {
            let catchEl = $(this).parent();
            let dataObj = createDataJson(catchEl);
            request('PUT', `biggestCatches/${catchEl.attr('data-id')}`, dataObj)
                .then(loadCatches)
                .catch(handleError)
        }
        function deleteCatch() {
            let id = $(this).parent().attr('data-id');
            request('DELETE', `biggestCatches/${id}`)
                .then(loadCatches)
                .catch(handleError)
        }


    }
    function createDataJson(element) {
        return{
            angler: element.find('.angler').val(),
            weight: Number(element.find('.weight').val()),
            species: element.find('.species').val(),
            location: element.find('.location').val(),
            bait: element.find('.bait').val(),
            captureTime: Number(element.find('.captureTime').val()),
        }
    }

    function handleError(reason) {
        alert(`Error: ${reason.statusText}`);
    }
}