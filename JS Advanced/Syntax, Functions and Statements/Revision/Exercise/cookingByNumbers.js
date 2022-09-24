function cookingByNumbers(n, par1, par2, par3, par4, par5) {
    let num = Number(n);
    let elements = [par1, par2, par3, par4, par5];
    let chop = function (n) {
        return num / 2;
    }

    let dice = function () {
        return Math.sqrt(num);
    }

    let spice = function () {
        return num + 1;
    }

    let bake = function () {
        return num * 3;
    }

    let fillet = function () {
        return (num * 0.80).toFixed(1);
    }

    for (let i = 0; i < elements.length; i++) {
        switch (elements[i]) {
            case 'chop':
                num = chop(num);
                break;
            case 'dice': num = dice();
                break;
            case 'spice': num = spice();
                break;
            case 'bake': num = bake();
                break;
            case 'fillet': num = fillet();
                break;
        }
        console.log(num);
    }

}

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')