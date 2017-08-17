/**
 * Created by vo13n on 16-Aug-17.
 */
$(() => {
    showView("AppHome");

    (() => {
        $('header').find('a[data-target]').click(navigateTo);
        $('#formRegister').submit(registerUser);
        $('#formLogin').submit(loginUser);
        $('#linkMenuLogout').click(logout);
        $('#linkUserHomeMyMessages').click(()=>{
            showView("MyMessages");
            loadMyMessages();
        });
        $('#linkUserHomeSendMessage').click(()=>{
            showView("SendMessage");
            // load all messages
        });
        $('#linkUserHomeArchiveSent').click(()=>{
            showView("ArchiveSent");
            // load all messages
        });
    })();

    if(sessionStorage.getItem('authtoken') === null){
        userLoggedOut();
    }
    else{
        userLoggedIn();
    }
    
    function loadMyMessages() {
        let username = sessionStorage.getItem('username');
        messagesService.loadMyMessages(username)
            .then((myMessages) => {
                dislplayMyMessages(myMessages);
            }).catch(handleError);
    }
    function dislplayMyMessages(messages) {
        let messagesContainer = $('#myMessages');
        messagesContainer.empty();

        let messagesTable = $('<table>');
        messagesTable.append($('<thead>')
            .append($('<th>From</th>'))
            .append($('<th>Message</th>'))
            .append($('<th>Date Received</th>')));
        let tableBody = $('<tbody>');


        for(let msg of messages){
            let tableRow = $('<tr>');
            let sender = formatSender(msg['sender_name'], msg['sender_username']);
            let text = msg['text'];
            let date = formatDate(msg['_kmd']['lmt']);
            tableRow.append($('<td>')).text(sender);
            tableRow.append($('<td>')).text(text);
            tableRow.append($('<td>')).text(date);
            tableBody.append(tableRow);
        }
        messagesTable.append(tableBody);
        messagesContainer.append(messagesTable);
    }

    function loginUser(ev) {
        ev.preventDefault();
        let inputUsername = $('#loginUsername');
        let inputPassword = $('#loginPasswd');

        let usernameVal = inputUsername.val();
        let passwordVal = inputPassword.val();

        auth.login(usernameVal, passwordVal)
            .then((userInfo) => {
                saveSession(userInfo);
                inputPassword.val('');
                inputUsername.val('');
                showInfo("Login successful.");
            }).catch(handleError);
    }

    function logout(ev) {
        auth.logout()
            .then(() => {
            "use strict";
            sessionStorage.clear();
            showInfo("Logout successful.");
            userLoggedOut();
            }).catch(handleError);
    }

    function registerUser(ev) {
        ev.preventDefault();
        let registerUsername = $('#registerUsername');
        let registerPassword = $('#registerPasswd');
        let registerName = $('#registerName');

        let usernameVal = registerUsername.val();
        let passwordVal = registerPassword.val();
        let nameVal = registerName.val();

        auth.register(usernameVal, passwordVal, nameVal)
            .then((userInfo)=>{
                registerName.val('');
                registerPassword.val('');
                registerUsername.val('');
                saveSession(userInfo);
                showInfo('User registration successful.');
            }).catch(handleError);
    }

    function navigateTo() {
        let dataTarget = $(this).attr('data-target');
        showView(dataTarget);
    }
    //Shows one view at a time
    function showView(viewName) {
        $('main > section').hide();
        $('#view' + viewName).show();
    }

    function userLoggedOut() {
        $('.anonymous').show();
        $('.useronly').hide();
        $('#spanMenuLoggedInUser').text('');
        showView("AppHome");
    }
    function userLoggedIn() {
        $('.anonymous').hide();
        $('.useronly').show();
        let username = sessionStorage.getItem('username');
        $('#spanMenuLoggedInUser').text('Welcome ' + username + '!');
        $('#viewUserHomeHeading').text('Welcome ' + username + '!');
        showView('UserHome');
    }

    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        userLoggedIn();
    }
    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(()=>infoBox.fadeOut(), 3000);
    }
    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
    }


    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').fadeOut()
    });
});