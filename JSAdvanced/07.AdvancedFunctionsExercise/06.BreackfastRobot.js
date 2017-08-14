/**
 * Created by vo13n on 03-Jul-17.
 */
let solution = (function () {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let products = {
        apple:{
            carbohydrate:1,
            flavour:2,
        },
        coke:{
            carbohydrate: 10,
            flavour: 20,
        },
        bourger:{
            carbohydrate:5,
            fat:7,
            flavour:3
        },
        omlet:{
            protein:5,
            fat:1,
            flavour:1
        },
        cheverme:{
            protein:10,
            carbohydrate:10,
            fat:10,
            flavour:10
        }
    };
    return function (inputStr) {
        let inputData = inputStr.split(' ');
        let command = inputData[0];

        if(command === 'restock'){
            let microElement = inputData[1];
            let queatity = Number(inputData[2]);
            robot[microElement] += queatity;
        }
        else if(command === 'report'){
            console.log(`protein=${robot.protein} carbohydrates=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`);
        }
        else if(command === 'prepare'){
            let selectedProduct = inputData[1];
            let selectedProductQuantity = Number(inputData[2]);
            let currentProductStats = products[selectedProduct];
            let canProductBeCooked = true;
            for(var microElement in currentProductStats){
                var microElementQuantity = currentProductStats[microElement];
                if(robot[microElement] < microElementQuantity * selectedProductQuantity){
                    canProductBeCooked = false;
                    console.log(`Error: not enough ${microElement} in stock`);
                    break;
                }
            }

            if(canProductBeCooked){
                for(var microElement in currentProductStats){
                    if(currentProductStats.hasOwnProperty(microElement)){
                        var microElementQuantity = currentProductStats[microElement];
                        robot[microElement] -= microElementQuantity * microElement;
                    }
                }
                console.log('Success');
            }
        }
    }
})();
solution('restock carbohydrate 10');
solution('restock flavour 10');
solution('prepare apple 1');
solution('restock fat 10');
solution('prepare burger 1');
solution('report');
