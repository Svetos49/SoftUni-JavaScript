function cookingNumbers(num, com1, com2, com3, com4, com5) {
    num = Number(num);
    let result = 0;
    let com = [com1, com2, com3, com4, com5];
    for (let i = 0; i < com.length; i++) {
        switch (com[i]) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num -= num * 0.2;
                break;

        } 
        console.log(num);
    }

}



// cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('------------------');
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')