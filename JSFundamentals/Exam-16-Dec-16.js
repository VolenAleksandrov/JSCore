/**
 * Created by vo13n on 13-Jun-17.
 */
function spiceMustFwol(startingCount) {
    let days = 0;
    let totalAmountExtracted = 0;
    while(startingCount >= 100){
        days++;
        totalAmountExtracted += startingCount;
        if(totalAmountExtracted >=26){
            totalAmountExtracted -= 26;
        }
        startingCount -= 10;
    }
    if(totalAmountExtracted >= 26){
        totalAmountExtracted -= 26;
    }
    console.log(days);
    console.log(totalAmountExtracted);
}
//spiceMustFwol(200);
function buildAWall(inputArr) {
    let resultPerDay = [];
    let wall = inputArr.map(Number)
    while(true){
        let count = 0;
        for(let i = 0; i < wall.length; i++){
            if(wall[i] < 30){
                wall[i]++;
                count++;
            }
        }
        if(count == 0){
            break;
        }
        resultPerDay.push(Number(count * 195));
    }
    console.log(resultPerDay.join(', '));
    console.log(1900 * resultPerDay.reduce((a, b) => a + b) + ' pesos')
}
//buildAWall([21, 25, 28] );
function solve([text]) {
    console.log(text
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
        .replace(/\. (?=[0-9])/g, (match) => `.`)
        .replace(/" *(.+?) *"/g, (match, g1) => `"${g1}"`)
        .replace(/([.,!?:;]) (?=[.,!?:;])/g, (match, g1) => g1));
}

function airport([input]) {
    let planes = new Set();
    let port = new Map();

    for (let plane of input) {
        let tokens = plane.split(" ");
        let name = tokens[0];
        let town = tokens[1];
        let ppl = Number(tokens[2]);
        let action = tokens[3];

        if (action == 'depart') {
            if (!planes.has(name)) continue;
            else {
                planes.delete(name);
            }
        }
        if (action == 'land') {
            if (planes.has(name)) continue;
            else {
                planes.add(name);
            }
        }

        if (!port.has(town)) {
            port.set(town, {planes: [], arrivals: 0, departures: 0});
        }
        if (!port.get(town).planes.includes(name)) {
            port.get(town).planes.push(name);
        }
        if (action == "land") {
            port.get(town).arrivals += ppl;
        } else {
            port.get(town).departures += ppl;
        }
    }
    console.log("Planes left:");
    [...planes].sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`- ${p}`));
    [...port].sort((t1, t2) => {
        if (t1[1].arrivals < t2[1].arrivals) return 1;
        if (t1[1].arrivals > t2[1].arrivals) return -1;
        return t1[0].localeCompare(t2[0]);
    }).forEach(logData);

    function logData(town) {
        //console.log(`${town[0]} ${town[1].arrivals} ${town[1].departures}`);
        console.log(town[0]);
        console.log(`Arrivals: ${town[1].arrivals}`);
        console.log(`Departures: ${town[1].departures}`);
        console.log("Planes:");
        town[1].planes.sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`-- ${p}`));
    }
}

//airport(["Boeing474 Madrid 300 land", "AirForceOne WashingtonDC 178 land", "Airbus London 265 depart", "ATR72 WashingtonDC 272 land", "ATR72 Madrid 135 depart" ]);


function bunnyKill(dataRows) {
    let matrix = [];
    for(let i = 0; i < dataRows.length-1; i++){
        matrix.push(dataRows[i].split(" ").map(Number));
    }
    let coordinates = dataRows[dataRows.length - 1].split(" ");
    let snowBallDamage = 0;
    let killedBunnies = 0;
    for(let i = 0; i < coordinates.length; i++){
        let [row, col] = coordinates[i].split(",").map(Number);
        if(matrix[row][col] > 0){
            snowBallDamage += explode(row, col, matrix);
            killedBunnies++;
        }
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] > 0){
                snowBallDamage += matrix[i][j];
                killedBunnies++;
            }
        }
    }
    console.log(snowBallDamage);
    console.log(killedBunnies);

    function explode(row, col, matrix) {
        let bunnyDamage = matrix[row][col];

        for(let i = row - 1; i <= row + 1; i++){
            for(let j = col - 1; j <= col + 1; j++){
                if(isInside(i, j, matrix)){
                    matrix[i][j] -= bunnyDamage;
                }
            }
        }
        matrix[row][col] = 0;
        return bunnyDamage;
    }
    function isInside(row, col, matrix) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }
}

bunnyKill([
    "5 10 15 20",
    "10 10 10 10",
    "10 15 10 10",
    "10 10 10 10",
    "2,2 0,1",
]);