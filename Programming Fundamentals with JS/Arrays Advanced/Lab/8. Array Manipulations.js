function arrayManipulation(input) {
    let arr = input.shift().split(' ').map(Number);
   
    for (let i = 0; i < input.length; i++) {
        let [command, num1, num2] = input[i].split(' ');
        num1 = Number(num1);
        num2 = Number(num2);
        switch (command) {
            case 'Add': arr.push(num1);
                break;
            case 'Remove': arr = arr.filter(x => x !== num1);
                break;
            case 'RemoveAt': arr.splice(num1, 1);
                break;
            case 'Insert': arr.splice(num2, 0, num1);
                break;
        }

    }
    console.log(arr.join(' '));
}

arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);


