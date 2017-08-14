/**
 * Created by vo13n on 26-Jun-17.
 */
function attachEventsListeners() {
    let dayBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minsBtn = document.getElementById('minutesBtn');
    let secBtn = document.getElementById('secondsBtn');

    dayBtn.addEventListener('click', onClickDays);
    hoursBtn.addEventListener('click', onClickHours);
    minsBtn.addEventListener('click', onClickMins);
    secBtn.addEventListener('click', onClickSecs);
    function onClickDays(event) {
        let days = document.getElementById('days').value;
        let hours = Number(days) * 24;
        let mins = hours * 60;
        let secs = mins * 60;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = mins;
        document.getElementById('seconds').value = secs;
    }
    function onClickHours(event) {
        let hours = document.getElementById('hours').value;
        let days = Number(hours)/24;
        let mins = hours * 60;
        let secs = mins * 60;
        document.getElementById('days').value = days;
        document.getElementById('minutes').value = mins;
        document.getElementById('seconds').value = secs;
    }
    function onClickMins(event) {
        let mins = document.getElementById('minutes').value;
        let hours = Number(mins) / 60;
        let days = hours / 24;
        let secs = mins * 60;
        document.getElementById('hours').value = hours;
        document.getElementById('days').value = days;
        document.getElementById('seconds').value = secs;
    }
    function onClickSecs(event) {
        let secs = document.getElementById('seconds').value;
        let mins = Number(secs) / 60;
        let hours = mins / 60;
        let days = hours / 24;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = mins;
        document.getElementById('days').value = days;
    }
}