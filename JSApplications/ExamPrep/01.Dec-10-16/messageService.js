/**
 * Created by vo13n on 17-Aug-17.
 */
let messagesService = (() =>{
    function loadMyMessages(username) {
        let endpoint =`messages?query="recipient_username":"${username}"}`;
        return requester.get('appdata', endpoint, 'Kinvey');
    }
    return {
        loadMyMessages
    }
})();