/**
 * Created by vo13n on 09-Jun-17.
 */
function printLetters(str) {
    for(let i = 0; i< str.length;i++){
        console.log(`str[${i}] -> ${str[i]}`);
    }
}
//printLetters("asdasd");

function concretenateAndReverse(arr) {
    let allStrings = arr.join('');
    let chars = Array.from(allStrings);
    let reversedChars = chars.reverse();
    let revStr = reversedChars.join('');
    return revStr;
}
//console.log(concretenateAndReverse(['asd', 'ASD', 'TRG']));;

function countOccurrences(string, text) {
    let count = 0;
    let index = text.indexOf(string);
    while (index > -1){
        count++;
        index = text.indexOf(string, index + 1);
    }
    return count;
}
//console.log(countOccurrences('the', 'the quick brown fox jumps over the lazy dog'));

function extractText(text) {
    let result = [];
    let startIndex = text.indexOf('(');
    while(startIndex > -1){
        let endIndex = text.indexOf(')', startIndex);
        if(endIndex == -1){
            break;
        }
        let snippet = text.substring(startIndex + 1, endIndex);
        result.push(snippet);
        startIndex = text.indexOf('(', endIndex);
    }
    console.log(result.join(', '));
}
//extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');

function aggregateTable(lines) {
    let sum = 0;
    let list = [];
    for(let line of lines){
        let townData = line.split('|'),
            townName = townData[1].trim(),
            income = Number(townData[2].trim());
        list.push(townName);
        sum+=income;
    }
    console.log(list.join(', ') + '\n' + sum);
}
//aggregateTable(['| Sofia           | 300', '| Veliko Tarnovo  | 500', '| Yambol          | 275']);

function restourandBill(arr) {
    let list = arr.filter((x,i) => i%2 == 0);
    let sum = arr.filter((x,i) => i%2 == 1).map(Number).reduce(((a,b) => a+b));
    console.log(`You purchased ${list.join(', ')} for a total sum of ${sum}`);
}
//restourandBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);

function extractUsernames(inputEmails) {
    let results = [];
    for(let email of inputEmails){
        let[alias, domain] = email.split('@');
        let username = alias + '.';
        let domainParts = domain.split('.');
        domainParts.forEach(p => username += p[0]);
        results.push(username);
    }
    console.log(results.join(', '));
}
extractUsernames(['pesho@gmail.com', 'tod_or@mail.dir.bg']);

function censor(text, words) {
    for(let current of words){
        let replaced = '-'.repeat(current.length);
        while(text.indexOf(current) > -1){
            text = text.replace(current, replaced);
        }
    }
    return text;
}
console.log(censor('I like C#, HTML, JS and PHP', ['C#', 'HTML', 'PHP']));

function parseTheEmployeeData() {
    
}