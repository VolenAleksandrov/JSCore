/**
 * Created by vo13n on 09-Aug-17.
 */
function attachEvents() {
    $('#btnLoadTowns').click(loadTowns);
    let root = document.getElementById('root');
    function loadTowns() {
        let townsStr = $('#towns').val();
        let source = $('#towns-template').html();
        let template = Handlebars.compile(source);
        let towns = townsStr.split(', ');
        for(let town of towns){
            root.innerHTML += template({town: town});
        }
    }
}