/**
 * Created by vo13n on 16-Aug-17.
 */
let auth = (() => {
    function login(username, password) {
        let userData = {
            username,
            password
        };
        return requester.post('user', 'login', 'basic', userData);
    }


    function register(username, password, name) {
        let userData = {
            username,
            password,
            name
        };
        return requester.post('user', '', 'basic', userData);
    }

    function logout() {
        let logoutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };
        return requester.post('user', '_logout', 'kinvey', logoutData);
    }
    return{
        login,
        register,
        logout
    }
})();