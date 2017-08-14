/**
 * Created by vo13n on 03-Jul-17.
 */
function solve(name, age, weight, height) {
    let bmi =Math.round(weight / Math.pow(height/100, 2));
    let status = undefined;
    if(bmi < 18.5){
        status = "underweight";
    }
    else if(bmi < 25){
        status = 'normal';
    }
    else if(bmi < 30){
        status = 'overweight';
    }
    else{
        status = 'obese';
    }
    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height,
        },
        BMI: bmi,
        status: status,
    };
    if(status === 'obese'){
        patient['recommendation'] = 'admission required';
    }
    return patient;
}
console.log(solve('peter', 29, 75, 182));