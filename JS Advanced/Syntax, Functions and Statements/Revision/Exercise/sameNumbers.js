function sameNumbers(input) {

    let sum = 0;
    let numInput = input.toString();
    let isSame = true;
    for(let i = 0; i < numInput.length; i++) {
        let current = Number(numInput[i]);
        let next = numInput[i + 1];
        if(numInput[i] != numInput[i + 1] && next != undefined) {
            isSame = 'false';
        } 
       sum += current;
    }
    return `${isSame}\n${sum}`
   
}

console.log(sameNumbers(2222222));
sameNumbers(2222222)