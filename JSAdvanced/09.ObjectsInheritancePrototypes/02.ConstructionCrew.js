/**
 * Created by vo13n on 08-Jul-17.
 */
function modifyWorker(worker) {
    if(worker.handsShaking){
        worker.bloodAlcoholLevel += worker.experience * worker.weight * 0.1;
        worker.handsShaking = false;
    }
    return worker;
}
console.log(modifyWorker({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
));