function fruitShop(input) {
    let fruit = input[0];
    let weeksDay = input[1];
    let quantity = Number(input[2]);
    let sum = 0;


    if (weeksDay == 'Saturday' || weeksDay == 'Sunday') {
        switch (fruit) {
            case 'banana': sum = 2.70 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'apple': sum = 1.25 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'orange': sum = 0.90 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'grapefruit': sum = 1.60 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'kiwi': sum = 3.00 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'pineapple': sum = 5.60 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'grapes': sum = 4.20 * quantity;
                console.log(sum.toFixed(2));
                break;
            default: console.log('error');
                break;
        }

    }

    else if (weeksDay == 'Monday' || weeksDay == 'Tuesday' || weeksDay == 'Wednesday' ||
        weeksDay == 'Thursday' || weeksDay == 'Friday') {
        switch (fruit) {
            case 'banana': sum = 2.50 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'apple': sum = 1.20 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'orange': sum = 0.85 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'grapefruit': sum = 1.45 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'kiwi': sum = 2.70 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'pineapple': sum = 5.50 * quantity;
                console.log(sum.toFixed(2));
                break;
            case 'grapes': sum = 3.85 * quantity;
                console.log(sum.toFixed(2));
                break;
            default: console.log('error');
                break;
        }

    } else {
        console.log('error');
    }


}

fruitShop(['apple', 'Tuesday', '2']);