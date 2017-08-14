/**
 * Created by vo13n on 04-Aug-17.
 */
function attachEvents() {
    let btn = $('#submit');
    btn.click(getWeather);

    function getWeather() {
        $.ajax({
            url: "https://judgetests.firebaseio.com/locations.json",
        })
            .then(getTownCode);

        function getTownCode(data) {
            let selectedTown = $('#location').val();
            let code = '';
            for(let town of data){
                if(town.name === selectedTown){
                    code = town.code;
                }
            }
            getTownConditions(code);
        }
        function getTownConditions(code) {
            let currentCondition = $.ajax({
                url: `https://judgetests.firebaseio.com/forecast/today/${code}.json`
            });
            let upcomingConditions = $.ajax({
                url: `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`
            });
            Promise.all([currentCondition, upcomingConditions])
                .then(displayTownWeather)
                .catch(handleError);
        }
        function displayTownWeather([currCond, upcomCond]) {
            //alert('asd');
            let forecast = $('#forecast');
            forecast.css('display', 'block');
            displayCurrentCond(currCond);
            displaUpcomingCond(upcomCond);
            function displayCurrentCond(data) {
                let conditionCont = $('#current');
                let condition = '';

                switch (data.forecast.condition){
                    case"Sunny":
                        condition = '&#x2600';
                        break;
                    case"Partly sunny":
                        condition = '&#x26C5';
                        break;
                    case"Overcast":
                        condition = '&#x2601';
                        break;
                    case"Rain":
                        condition = '&#x2614';
                        break;
                }
                let weatherSymbol = $('<span>')
                    .html(condition)
                    .addClass('condition symbol');
                conditionCont.append(weatherSymbol);
                let conditionSpan = $('<span>');
                conditionSpan.appendTo(conditionCont);
                conditionSpan.append(
                    $(`<span class="forecast-data">${data.name}</span>`)
                );
                conditionSpan.append(
                    $(`<span class="forecast-data">${data.forecast.low}&#176/${data.forecast.high}&#176</span>`)
                );
                conditionSpan.append(
                    $(`<span class="forecast-data">${data.forecast.condition}</span>`)
                );
            }
            function displaUpcomingCond(data) {
                let upcomCont = $('#upcoming');
                let condition = '';
                for(let day of data.forecast){
                    switch (day.condition){
                        case"Sunny":
                            condition = '&#x2600';
                            break;
                        case"Partly sunny":
                            condition = '&#x26C5';
                            break;
                        case"Overcast":
                            condition = '&#x2601';
                            break;
                        case"Rain":
                            condition = '&#x2614';
                            break;
                    }
                    upcomCont.append(
                        $('<span class="upcoming"></span>')
                            .append($('<span class="symbol"></span>').html(condition))
                            .append($(`<span class="forecast-data">${day.low}&#176/${day.high}&#176</span>`))
                            .append($(`<span class="forecast-data">${day.condition}</span>`))
                    )
                }
                console.log(data);
            }
        }
    }
    function handleError(reason) {
            console.log(reason);
    }
}