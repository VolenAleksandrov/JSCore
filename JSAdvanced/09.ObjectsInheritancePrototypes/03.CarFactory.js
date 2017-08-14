/**
 * Created by vo13n on 08-Jul-17.
 */
function modifyCar(car) {
    let power = 0;
    let volume = 0;
    let wheelSize = 0;
    if(Number(car.power) <= 90){
        power = 90;
        volume = 1800;
    }
    else if(Number(car.power) <= 120){
        power = 120;
        volume = 2400;
    }
    else{
        power = 200;
        volume = 3500;
    }
    if(Number(car.wheelsize) % 2 === 0){
        wheelSize = Number(car.wheelsize) - 1;
    }
    else{
        wheelSize = car.wheelsize;
    }
    return{
        model: car.model,
        engine: {
            power: power,
            volume: volume
        },
        carriage: {
            type: car.carriage,
            color: car.color,
        },
        wheels: [wheelSize, wheelSize, wheelSize, wheelSize],
    }
}

console.log(modifyCar({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

));