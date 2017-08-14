/**
 * Created by vo13n on 31-Jul-17.
 */
function attachEvents() {
    $('#refresh').click(attachRefresh);
    $('#submit').click(attachSend);

    function attachSend() {
        let messageJson = {
            "author": $('#author').val(),
            "content": $('#content').val(),
            "timestamp": Date.now()
        };

        let sendMessageRequest = {
            url: 'https://messenger-a572f.firebaseio.com/messenger/.json',
            method: 'POST',
            data: JSON.stringify(messageJson),
            success: attachRefresh
        };
        $.ajax(sendMessageRequest);
    }

    function attachRefresh() {
        $.get('https://messenger-a572f.firebaseio.com/messenger/.json')
            .then(displayMessages);
    }

    function displayMessages(messages) {
        let output = $('#messages');
        let messageStr = '';
        for(let key in messages){
            messageStr += `${messages[key]["author"]}: ${messages[key]["content"]}\n`
        }
        output.text(messageStr);
    }
}