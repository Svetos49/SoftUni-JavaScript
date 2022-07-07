function solve(numOne, numTwo, operator) {
    'multiply', 'divide', 'add' , 'subtract'
    let multiply = function(numOne, numTwo) {
        console.log(numOne * numTwo);
    }
    let divide = (numOne, numTwo) => console.log(numOne / numTwo);
    let add = (n1, n2) => console.log(n1 + n2);
    let subtract = (n1, n2) => console.log(n1 - n2);

    switch(operator) {
        case 'multiply': multiply(numOne, numTwo);
        break;
        case 'divide': divide(numOne, numTwo);
        break;
        case 'add': add(numOne, numTwo);
        break;
        case 'subtract': subtract(numOne, numTwo);
        break;
    }

    
}

solve(5, 5,'multiply');
solve(40, 8, 'divide');