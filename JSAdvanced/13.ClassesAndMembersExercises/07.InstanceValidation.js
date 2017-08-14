/**
 * Created by vo13n on 13-Jul-17.
 */
class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId(){
        return this._clientId;
    }
    set clientId(value){
        if(value.length !== 6){
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = value;
    }
    get email(){
        return this._email;
    }
    set email(value){
        let pattern = /^[a-zA-Z{1}]*@[a-zA-Z]+[.A-Za-z]*$/g;
        if(!value.match(pattern)){
            throw new TypeError('Invalid e-mail');
        }
        this._email = value;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        if(value.length > 20 || value.length < 3){
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        let pattern = /^[a-zA-Z]*$/g;
        if(!value.match(pattern)){
            throw new TypeError('First name must contain only Latin characters');
        }
        this._firstName = value;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        if(value.length > 20 || value.length < 3){
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        let pattern = /^[a-zA-Z]*$/g;
        if(!value.match(pattern)){
            throw new TypeError('Last name must contain only Latin characters');
        }
        this._lastName = value;
    }
}
try{
    let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov');
}
catch (ex){
    console.log(`TypeError: ${ex.message}`)
}