// function calc() {
//     const num1 = Number(document.getElementById('num1').value);
//     const num2 = Number(document.getElementById('num2').value);
//     const result = num1 + num2;
    

//     document.getElementById('sum').value = result;
// }


function calc() {
    let firstNumElement = document.getElementById('num1').value;
    let secondNumElement = document.getElementById('num1').value;
    let sum = Number(firstNumElement) + Number(secondNumElement);
    document.getElementById('sum').value = sum; 
}
