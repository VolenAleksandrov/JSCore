/**
 * Created by vo13n on 13-Jul-17.
 */
class Textbox {
    constructor(selector, regex){
        this.selector = selector;
        this._invalidSymbols = regex;
        this._elements = $(this.selector);
        $(this.selector).on('input', function () {
            $('*[type=text]').val(this.value);
        });
    }

    get elements(){
        return this._elements;
    }
    get value(){
        return this.elements.val();
    }
    set value(newValue){
        this.elements.val(newValue);
    }
    isValid(){
        return !this.value.match(this._invalidSymbols);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
