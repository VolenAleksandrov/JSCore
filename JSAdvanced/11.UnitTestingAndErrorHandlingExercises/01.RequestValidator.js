/**
 * Created by vo13n on 11-Jul-17.
 */
function requestValidator(obj) {
    let validMethods = ['GET','POST','DELETE','CONNECT'];
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let regexURI = /^[\w.]+$/;
    let messageRegex = /^[^<>\\&'"]*$/;

    if(!(validMethods.includes(obj.method) && obj.method)){
        throw new Error("Invalid request header: Invalid Method");
    }
    if(! (obj.uri && ( regexURI.test(obj.uri) || obj.uri === "*"))){
        throw new Error("Invalid request header: Invalid URI");
    }
    if(!(validVersions.includes(obj.version) && obj.version)){
        throw new Error("Invalid request header: Invalid Version");
    }
    if(!(obj.hasOwnProperty("message") && (messageRegex.test(obj.message) || obj.message === ""))) {
        throw new Error("Invalid request header: Invalid Message");
    }
    return obj;
}
console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));