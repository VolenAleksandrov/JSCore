/**
 * Created by vo13n on 18-Jun-17.
 */
function thePiramid(base, increment) {
    base = Number(base);
    increment = Number(increment);
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let currentStep = 0;
    let height = 0;
    while (true) {
        if (base == 2 || base == 1) {
            gold += (base * base) * increment;
            height+=increment;
            break;
        }
        stone += ((base - 2) * (base - 2)) * increment;
        currentStep++;
        height+=increment;
        if (currentStep % 5 == 0) {
            lapis += ((base * base) - ((base - 2) * (base - 2))) * increment;
        }
        else {
            marble += ((base * base) - ((base - 2) * (base - 2))) * increment;
        }
        base -= 2;
    }


    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

//thePiramid(11, 0.75);

function galacticElections(input) {
    let systems = new Map();
    for(let i = 0; i < input.length; i++){
        let candidate = input[i].candidate;
        let system = input[i].system;
        let votes = Number(input[i].votes);
        if(!systems.has(system)) {
            systems.set(system, new Map().set(candidate, votes));
        }
        else{
            systems.get(system).set(candidate, votes);
        }
    }
    systems.forEach(x=>Math.max(x.camdidate))
    console.log(systems);
}

galacticElections([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau', candidate: 'Space Cow', votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 60 },
    { system: 'Tau', candidate: 'Flying Shrimp', votes: 150 } ]
);

function messages(input) {
    let pattern = '^<message.*<\/message>';
    let messageRegex = new RegExp(pattern, 'g');
    let str = messageRegex.exec(input);
    let indexOfTo = str.indexOf(`to`);
    console.log(indexOfTo);
//    let result = `<article>
// <div>From: <span class="sender">${str[2]}</span></div>
// <div>To: <span class="recipient">${str[1]}</span></div>
// <div>
// <p>${str[3]}</p>
// </div>
//</article>`;

    console.log(str);
}
//messages(`<message to="Bob" from="Alice" timestamp="1497254092"">Hey man, what's up?</message>`);

function notation(arr){
    let numbers = [];
    let operators = [];
    let currrentNumber = 0;
    let asd = false;

    for(let i = 0; i< arr.length; i++){
        if(Number.isInteger(arr[i])){
            numbers.push(Number(arr[i]));
        }
        else{
            operators.push(arr[i]);
        }
    }
    numbers.reverse();
    //operators.reverse();
    currrentNumber = numbers.pop();
    for(let i = 0; i < operators.length; i++) {
        let number = numbers.pop();
        if(number == undefined){
            asd = true;
            break;
        }
        switch (operators[i]) {
            case "-":
                currrentNumber = currrentNumber - number;
                break;
            case "+":
                currrentNumber = currrentNumber + number;
                break;
            case "*":
                currrentNumber = currrentNumber * number;
                break;
            case "/":
                currrentNumber = currrentNumber / number;
                break;
        }
    }//
    if(numbers.length > 0){
        console.log("Error: too many operands!");
    }
    else if(asd){
        console.log("Error: not enough operands!");
    }
    else {
        console.log(Math.ceil(currrentNumber));
    }
}
//notation([-1,
//1,
//    '+',
//    101,
//    '*',
//    18,
//    '+',
//    3,
//    '/']);