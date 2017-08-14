/**
 * Created by vo13n on 02-Jul-17.
 */
function solve(commands) {
    let processor = (function () {
        let resultStr = '';

        return function processor(commandSting) {
            let commandTokens = commandSting.split(' ');
            switch (commandTokens[0]) {
                case 'append':
                    resultStr += commandTokens[1];
                    break;
                case 'removeStart':
                    resultStr = resultStr.slice(Number(commandTokens[1]));
                    break;
                case 'removeEnd':
                    resultStr = resultStr.slice(0, resultStr.length - Number(commandTokens[1]));
                    break;
                case 'print':
                    console.log(resultStr);
                    break;
            }
        }
    })();
    for(let command of commands){
        processor(command);
    }
}
solve(['append hello', 'removeStart 2', 'removeEnd 1', 'print']);