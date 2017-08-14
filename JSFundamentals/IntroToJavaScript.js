/**
 * Created by vo13n on 02-Jun-17.
 */
//sum 3 numbers
function sumNumbers(a, b, c) {
    console.log(a + b + c);
}
//sumNumbers(1,2,3);
function sumNumberss(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let sum = a + b + c;
    console.log(sum);
}
//sumNumberss(['1', '2', '3']);
//Sum and VAT
function sumAndVAT(input) {
    let elementsCount = input.length;
    let sum = 0;
    for (i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }
    console.log("sum = " + sum);
    let vat = sum * 0.2;
    console.log("VAT = " + vat);
    let total = sum + vat;
    console.log("total = " + total)
}
//sumAndVAT(['1.20', '2.60', '3.50']);

function letterOccurrencesInString(string, letter) {
    let count = 0;
    for(i=0; i<string.length;i++){
        if(string[i] == letter)
        {
            count++;
        }
    }
    console.log(count);
}
//letterOccurrencesInString('hello', 'l');

function filterByAge(minAge, firstPName, firstPAge, secondPName, secondPAge) {
    let person1 = {name:firstPName, age:Number(firstPAge)};
    let person2 = {name:secondPName, age:Number(secondPAge)};
    if(person1.age >= minAge){
        console.log(person1);
    }
    if(person2.age >= minAge)
    {
        console.log(person2);
    }
}
//filterByAge(12, 'Ivan', 15, 'Asen', 9);

function stringNumbert1ToN(n) {
    let result = '';
    for(let i = 1; i <= Number(n); i++){
        result += i;
    }
    console.log(result)
}
//stringNumbert1ToN('11');

function distaceBetweenPoints2D(x1, y1, x2, y2) {
    let distace = Math.sqrt(Math.pow(Number(x2)-Number(x1), 2) + Math.pow(Number(y2)-Number(y1), 2));
    console.log(distace);
}
distaceBetweenPoints2D(2, 4, 5, 0);