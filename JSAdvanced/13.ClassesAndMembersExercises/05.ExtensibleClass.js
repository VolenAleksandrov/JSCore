/**
 * Created by vo13n on 13-Jul-17.
 */
let extensible = (function () {
    let id = 0;
    return class Extensible{
        constructor(){
            this.id = id++;
        }
        extend (template){
            for (let prop in template){
                if(typeof template[prop] === 'function'){
                    Extensible.prototype[prop] = template[prop];
                }
                else{
                    this[prop] = template[prop];
                }
            }
        }
    }
})();
let obj1 = new extensible();
let obj2 = new extensible();
let obj3 = new extensible();
obj3.extend(template = {
    extentionMethod: function () {
        console.log("Hello");
    },
    extentionProperty: 'someString'
});
obj3.
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
