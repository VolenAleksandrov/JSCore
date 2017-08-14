/**
 * Created by vo13n on 07-Jun-17.
 */
function MultiplyNumbers(a, b) {
    console.log(Number(a) * Number(b));
}

function boxesAndBottles(bottles, boxesFitSize) {
    let times = Math.ceil(Number(bottles) / Number(boxesFitSize));
    console.log(times);
}

function leapYear(year) {
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    {
        console.log("yes")
    }
    else{
        console.log("no")
    }
}
//leapYear(2000);

function circleArea(radius) {
    let area = Math.PI * radius ** 2;
    console.log(area);
    console.log(Math.round(area * 100) / 100);
}
//circleArea(5);

function triangleArea(a, b, c) {
    let p = (a + b + c) /2;
    let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(area);
}
//triangleArea(2, 3.5, 4);

function cone(r, h) {
    let volume = (1/3)*Math.PI*r*r*h;
    let s = Math.sqrt(r*r+h*h);
    console.log("volume = " + volume);
    let area = Math.PI * r * (r+s);
    console.log("area = " + area);
}
cone(3, 5);