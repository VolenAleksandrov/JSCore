/**
 * Created by vo13n on 18-Jun-17.
 */
function arithmephile(input) {
    let numbers = input.map(Number);
    let biggestProduct = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < numbers.length; i++){
        let currentNum = numbers[i];
        if(currentNum >= 0 && currentNum < 10){
            let currentProduct = 1;
            for(let j = i+1; j <= currentNum + i; j++){
                currentProduct *= numbers[j];
            }
            if(currentProduct > biggestProduct){
                biggestProduct = currentProduct;
            }
        }
    }
    console.log(biggestProduct);
}
//arithmephile([
//    '10',
//    '20',
//    '2',
//    '30',
//    '44',
//    '3',
//    '56',
//    '20',
//    '24'
//]);

function rosettaStone(input) {
    let templateMatrixRows = Number(input[0]);

    for(let i = 0; i<templateMatrixRows.length; i++){
        let currentRowLength = templateMatrixRows[i].length;
        for(let j = 0; j < currentRowLength; j++){

        }
    }
}
function solve(input) {
    // Get size of code
    let n = Number(input.shift());

    // Initialize code matrix
    let code = [];
    for (let i = 0; i < n; i++) {
        code.push(input.shift().split(' ').map(Number));
    }
    console.log(code);
    // Initialize message matrix
    let matrix = [];
    for (let row of input) {
        matrix.push(row.split(' ').map(Number));
    }

    // Initialize decoded message
    let result = '';

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col< matrix[0].length; col++) {
            let current = matrix[row][col];
            let modifier = code[row % code.length][col % code[0].length];
            result += String.fromCharCode(((current + modifier) % 27) + 64);
        }
    }

    result = result.replace(/@/g, ' ');
    console.log(result);
}
//solve([ '2',
//    '59 36',
//    '82 52',
//    '4 18 25 19 8',
//    '4 2 8 2 18',
//    '23 14 22 0 22',
//    '2 17 13 19 20',
//    '0 9 0 22 22' ]);

function spyMaster(input) {
    let specialKey = input[0];
    let pattern = `(^|\\s)(${specialKey}\\s+)([!#$%A-Z]{8,})(\\s|\\.|,|$)`;
    let messageRegex = new RegExp(pattern, 'gi');

    for(let i = 1; i < input.length; i++){
        let line = input[i].replace(messageRegex, replacer);
        console.log(line);
    }
    function replacer(match, g1, g2, g3) {
        g3 = g3.replace(/!/g,'1')
            .replace(/%/g,'2')
            .replace(/\#/g,'3')
            .replace(/\$/g,'4')
            .replace(/[A-Z]/g, x => x.toLowerCase());
        return g1 + g2 + g3;
    }
}
spyMaster(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!']);



















