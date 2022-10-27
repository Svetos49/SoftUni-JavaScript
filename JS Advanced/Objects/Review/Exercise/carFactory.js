function carFactory(input) {
    // let result = {};
    // for (key in input) {
    //     result.model = input.model;
    //     if (input.power <= 90) {
    //         result.engine = { power: 90, volume: 1800 }
    //     } else if (input.power <= 120) {
    //         result.engine = { power: 120, volume: 2400 };
    //     } else if (input.power <= 200) {
    //         result.engine = { power: 200, volume: 3500 };
    //     }
    //     result.carriage = { type: input.carriage, color: input.color };
    //     let arr = [];
    //     let weel = input.wheelsize;

    //     for (let i = 0; i < 4; i++) {
    //         if (weel % 2 == 0) {
    //             arr.push(weel - 1);
    //             result.weels = arr;

    //         } else {
    //             arr.push(weel);
    //             result.weels = arr;
    //         }
    //     }

    // }
    // return result;

    let resultCar = {};

    let engine = {};
    let carriage = {};

    resultCar.model = input.model;
    if (input.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (input.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (input.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    carriage.type = input.carriage;
    carriage.color = input.color;

    if (input.wheelsize % 2 == 0) {
        input.wheelsize--;
    }
    resultCar.engine = engine;
    resultCar.carriage = carriage;
    resultCar.weels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];

    return resultCar;
}

carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 })

console.log(carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }))