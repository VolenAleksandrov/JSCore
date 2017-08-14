/**
 * Created by vo13n on 13-Jul-17.
 */
class Stringer{
    constructor(str, length){
        this.innerString = str;
        this.innerLength = Number(length);
    }
    increase(length){
        if(this.innerLength - Number(length) < 0){
            this.innerLength = 0;
        }
        this.innerLength += Number(length);
    }
    decrease(length){
        if(this.innerLength - Number(length) < 0){
            this.innerLength = 0;
            return;
        }
        this.innerLength -= Number(length);
    }
    toString(){
        if(this.innerString.length > this.innerLength){
            return `${this.innerString.substring(0, this.innerLength)}...`;
        }
        return this.innerString;
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
