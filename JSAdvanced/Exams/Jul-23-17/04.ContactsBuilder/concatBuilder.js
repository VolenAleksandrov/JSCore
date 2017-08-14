/**
 * Created by vo13n on 23-Jul-17.
 */
class Contact{
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }
    set online(value){
        this._online = value;
        let elements = $('.title');
        if(this._online === true){
            for(let element of elements){
                if((this.firstName + ' ' + this.lastName) === element.text()){
                    element.addClass('online');
                }
            }
        }
        //else{
        //    for(let element of elements){
        //    //    if((this.firstName + ' ' + this.lastName) === element.text()){
        //            element.removeClass('online');
        //        }
        //    }
        //}
    }
    get online(){
        return this._online;
    }
    render(id){
        let article = $('<article>');
        let titleDiv = $(`<div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>`);
        if(this.online === true){
            titleDiv.addClass('online');
        }
        if(this.online === false){
            titleDiv.removeClass('online');
        }
        let infoDiv = $('<div class="info" style="display: none"></div>');
        let phoneSpan = $(`<span>&phone; ${this.phone}</span>`);
        let emailSpan = $(`<span>&#9993; ${this.email}</span>`);
        $(titleDiv).find(':button').click(function () {
            if(infoDiv.css('display') === 'none'){
                infoDiv.css('display', 'block');
            }
            else{
                infoDiv.css('display', 'none');
            }
        });
        infoDiv.append(phoneSpan);
        infoDiv.append(emailSpan);
        article.append(titleDiv);
        article.append(infoDiv);
        $('#' + id).append(article);
    }
}