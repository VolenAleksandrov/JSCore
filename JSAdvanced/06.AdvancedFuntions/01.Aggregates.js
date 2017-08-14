/**
 * Created by vo13n on 02-Jul-17.
 */


function callAggregates(arr) {
    console.log('Sum = ' + reduse(arr, (a, b) => Number(a) + Number(b)));
    console.log('Min = ' + reduse(arr, (a, b) => a < b ? a : b));
    console.log('Max = ' + reduse(arr, (a, b) => a < b ? b : a));
    console.log('Product = ' + reduse(arr, (a, b) => a * b));
    console.log('Join = ' + reduse(arr, (a, b) => "" + a + b));

    function reduse(arr, func) {
        let result = arr[0];
        for(let nextElement of arr.slice(1)){
            result = func(result, nextElement);
        }
        return result;
    }
}
callAggregates([2,3,10,5]);