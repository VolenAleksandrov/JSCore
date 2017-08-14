/**
 * Created by vo13n on 02-Jul-17.
 */
function sort(arr, sortType) {
    return arr.sort((a, b) => {
        if(sortType === 'asc'){
            return a - b;
        }
        return b - a;
    })
}
console.log(sort([12, 32, 41, 31, 54], 'asc'));