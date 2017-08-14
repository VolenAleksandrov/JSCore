/**
 * Created by vo13n on 13-Jul-17.
 */
class Rat{
    constructor(name){
        this.name = name;
        this.rats = [];
    }
    unite(rat){
        if(rat instanceof Rat){
            this.rats.push(rat);
        }
    }

    getRats(rat){
        return this.rats;
    }
    toString(){
        let result = this.name;
        for(let rat of this.rats){
            result += `\n##${rat.name}`;
        }
        return result;
    }
}
let pesho = new Rat("Pesho");
console.log(pesho.toString()); //Pesho

console.log(pesho.getRats()); //[]

pesho.unite(new Rat("Gosho"));
pesho.unite(new Rat("Sasho"));
console.log(pesho.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(pesho.toString());
// Pesho
// ##Gosho
// ##Sasho
