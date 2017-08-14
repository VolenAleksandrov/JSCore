/**
 * Created by vo13n on 08-Jun-17.
 */
function PrintArrayWithGivenDelimeter(arr) {
    let delimeter = arr[arr.length - 1];
    arr.pop();
    let result = arr[0];
    for(let i = 1; i<arr.length; i++){
        result += delimeter + arr[i];
    }
    console.log(result);
}
//PrintArrayWithGivenDelimeter(['One', 'Two', 'Three', '-']);

function PrintEveryNElementfromArray(arr) {
    let count = Number(arr[arr.length-1]);
    arr.pop();
    for(let i = 0; i < arr.length; i+=count){
        console.log(arr[i]);
    }
}
PrintEveryNElementfromArray(['5', '20', '31', '4', '20', '2']);