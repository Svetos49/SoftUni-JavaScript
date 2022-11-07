function breakfastRobot() {
    const recipes = {
        apple: { carbohydrate: 1, flavor: 2 },
        lemonade: { carbohydrate: 10, flavor: 20 },
        burger: { carbohydrate: 5, fat: 7, flavor: 3 },
        eggs: { protein: 5, fat: 1, flavor: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavor: 10 }
    }
    const storage = {
        carbohydrate: 0,
        protein: 0,
        fat: 0,
        protein: 0
    }

    function restock(microelement, quantity) {
        storage[microelement] += Number(quantity);
        return `Success`;
    }

    function control(str) {
        const [command, item, quantity] = str.split(' ');

        switch (command) {
            case 'restock': return restock(item, Number(quantity));

            case 'prepare': return prepare(item, Number(quantity));

            case 'report': return report();

        }
    }

    function prepare(recipe, quantity) {
        const remainingStorage = {};

        for (let element in recipes[recipe]) {
            const remaining = Number(storage[element]) - Number(recipes[recipe][element]) * Number(quantity);
            if (remaining < 0) {
                return `Error: not enough ${element} in stock`;
            } else {
                remainingStorage[element] = remaining;
            }
        }
        Object.assign(storage, remainingStorage);
        return `Success`;
    }

    function report() {
        return `protein=${storage[protein]} carbohydrate=${storage[carbohydrate]} fat=${storage[fat]} flavour=${storage[flavor]}`;
    }
    return control;
}

let manager = breakfastRobot();

console.log(manager('restock flavour 50')); // Success 
console.log(manager('prepare lemonade 4')); //