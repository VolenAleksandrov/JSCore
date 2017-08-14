/**
 * Created by vo13n on 09-Jul-17.
 */
let myObj = getExtensiblObject();

function getExtensibleObject() {
    let obj = {
        extend: function (template) {
            for(let key in template){
                if(template.hasOwnProperty(key)){
                    let element = template[key];
                    if(typeof element === 'function'){
                        obj.__proto__[key] = element;
                    }
                    else{
                        obj[key] = element;
                    }

                }
            }
        }
    };
    return obj;
}