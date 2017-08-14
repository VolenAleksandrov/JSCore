/**
 * Created by vo13n on 03-Jul-17.
 */
let solve = (function () {
    let sum = 0;
    return function add(number) {
        sum+=number;
        add.toString = function () {
            return sum;
        };
        return add;
    }
})();
console.log(solve(1)(2)(3).toString());