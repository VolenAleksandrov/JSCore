/**
 * Created by vo13n on 17-Jul-17.
 */
class Person{
    constructor(name){
        this.name = name;
    }
    toString(){
        return `I'm ${this.name}`;
    }
}
module.exports = Person;