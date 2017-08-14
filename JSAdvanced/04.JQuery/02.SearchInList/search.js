/**
 * Created by vo13n on 27-Jun-17.
 */
function search() {
    let text = $('#searchText').val();
    let matches = 0;
    $('#towns li').each((index ,el) => {
        if(el.textContent.includes(text)){
            $(el).css("font-weight", "bold");
            matches++;
        }
        else {
            $(el).css("font-weight", "");
        }
    });
    $('#result').text(matches + " matches found.");
}