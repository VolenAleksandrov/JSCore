/**
 * Created by vo13n on 02-Jul-17.
 */
function myFunc() {
    let argumentTypes = {};
    for(var i = 0; i < arguments.length; i++){
        var argumentValue = arguments[i];
        console.log(`${typeof argumentValue}: ${argumentValue}`);
        if(!argumentTypes.hasOwnProperty(typeof argumentValue)){
            argumentTypes[typeof argumentValue] = 0
        }
        argumentTypes[typeof argumentValue]++;
    }
    let sortedArr = [];
    for(var argumentType in argumentTypes){
        if(argumentTypes.hasOwnProperty(argumentType)){
            let element = argumentTypes[argumentType];
            sortedArr.push([argumentType, element]);
        }
    }
    sortedArr = sortedArr.sort((a, b) => {
        return b[1] - a[1];
    });
    for(var index = 0; index < sortedArr.length; index++){
        let element = sortedArr[index];
        let argumentType = element[0];
        let argumentCount = element[1];

        console.log(`${argumentType} = ${argumentCount}`)
    }

}
myFunc('cat', 42, 420, function () { console.log('Hello world!'); });