function startApp() {
    // Clear user auth information at startup
    sessionStorage.clear();
    let username = '';
    showHideMenuLinks();
    showView('viewHome');
    // Bind the navigation menu links
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListAds").click(listAdvertisements);
    $("#linkCreateAd").click(showCreateAdView);
    $("#linkLogout").click(logoutUser);

    // Bind the form submit buttons
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonCreateAd").click(createAd);
    $("#buttonEditAd").click(editAd);
    $("form").submit(function(event) { event.preventDefault() });

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }
    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }
    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    }

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_B1GwnUVP-";
    const kinveyAppSecret = "6e9a4712003d4037ba50ac2a53f2a430";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }
    function editAd() {
        const kinveyBookUrl =  kinveyBaseUrl + "appdata/" + kinveyAppKey +
            "/ads/" + $('#formEditAd input[name=id]').val();
        let bookData = {
            title: $('#formEditAd input[name=title]').val(),
            publisher: username,
            description: $('#formEditAd textarea[name=description]').val(),
            date: $('#formEditAd input[name=datePublished]').val(),
            price: $('#formEditAd input[name=price]').val()
        };
        $.ajax({
            method: "PUT",
            url: kinveyBookUrl,
            headers: getKinveyUserAuthHeaders(),
            data: bookData,
            success: editBookSuccess,
            error: handleAjaxError
        });

        function editBookSuccess(response) {
            listAdvertisements();
            showInfo('Ad edited.');
        }
    }

    function createAd() {
        const kinveyBooksUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads";
        let bookData = {
            title: $('#formCreateAd input[name=title]').val(),
            publisher: username,
            description: $('#formCreateAd textarea[name=description]').val(),
            date: $('#formCreateAd input[name=datePublished]').val(),
            price: $('#formCreateAd input[name=price]').val()
        };

        $.ajax({
            method: "POST",
            url: kinveyBooksUrl,
            headers: getKinveyUserAuthHeaders(),
            data: bookData,
            success: createAdSuccess,
            error: handleAjaxError
        });

        function createAdSuccess(response) {
            listAdvertisements();
            showInfo('Ad created.');
        }
    }

    function registerUser() {
        const kinveyRegisterUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/";
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyRegisterUrl,
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });

        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAdvertisements();
            showInfo('User registration successful.');
        }
    }
    function loginUser() {
        const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/login";
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyLoginUrl,
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });

        function loginSuccess(userInfo) {
            username = userInfo.username;
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAdvertisements();
            showInfo('Login successful.');
        }
    }

    function deleteAd(ad) {
        const kinveyBookUrl = kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/ads/" + ad._id;
        $.ajax({
            method: "DELETE",
            url: kinveyBookUrl,
            headers: getKinveyUserAuthHeaders(),
            success: deleteBookSuccess,
            error: handleAjaxError
        });

        function deleteBookSuccess(response) {
            listAdvertisements();
            showInfo('Ad deleted.');
        }
    }
    function listAdvertisements() {
        $('#ads').empty();
        showView('viewAds');

        const kinveyBooksUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads";
        $.ajax({
            method: "GET",
            url: kinveyBooksUrl,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdsSuccess,
            error: handleAjaxError
        });

        function loadAdsSuccess(ads) {
            showInfo('Ads loaded.');
            if (ads.length === 0) {
                $('#ads').text('No ads in the library.');
            } else {
                let adsTable = $('<table>')
                    .append($('<tr>').append(
                        '<th>Title</th>',
                        '<th>Publisher</th>',
                        '<th>Description</th>',
                        '<th>Date of publish</th>',
                        '<th>Price</th>',
                        '<th>Actions</th>')
                    );
                for (let ad of ads) {
                    let links = [];
                    if (ad._acl.creator === sessionStorage['userId']) {
                        let deleteLink = $('<a href="#">[Delete]</a>')
                            .click(deleteAd.bind(this, ad));
                        let editLink = $('<a href="#">[Edit]</a>')
                            .click(loadAdForEdit.bind(this, ad));
                        links = [deleteLink, ' ', editLink];
                    }
                    adsTable.append($('<tr>').append(
                        $('<td>').text(ad.title),
                        $('<td>').text(ad.publisher),
                        $('<td>').text(ad.description),
                        $('<td>').text(ad.date),
                        $('<td>').text(ad.price),
                        $('<td>').append(links)
                    ));
                }
                $('#ads').append(adsTable);
            }
        }
    }
    function loadAdForEdit(ad) {
        const kinveyBookUrl = kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/ads/" + ad._id;
        $.ajax({
            method: "GET",
            url: kinveyBookUrl,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdForEditSuccess,
            error: handleAjaxError
        });

        function loadAdForEditSuccess(ad) {
            $('#formEditAd input[name=id]').val(ad._id);
            $('#formEditAd input[name=title]').val(ad.title);
            $('#formEditAd input[name=author]').val(ad.publisher);
            $('#formEditAd textarea[name=description]').val(ad.description);
            $('#formEditAd input[name=datePublished]').val(ad.date);
            $('#formEditAd input[name=price]').val(ad.price);
            showView('viewEditAd');
        }
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text("");
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful.');
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }
    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        $('#loggedInUser').text("Welcome, " + username + "!");
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    // Bind the info / error boxes
    $("#infoBox, #errorBox").click(function() {
        $(this).fadeOut();
    });

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken') === null) {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
        } else {
            // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
        }
    }
}