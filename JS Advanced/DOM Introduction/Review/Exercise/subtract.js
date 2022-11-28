function subtract() {
  let firstNumEl = document.getElementById('firstNumber').value;
   firstNumEl = Number(firstNumEl);
  let secnodNumEl = document.getElementById('secondNumber').value;
   secnodNumEl = Number(secnodNumEl);
   let result = firstNumEl - secnodNumEl;
  let resultEl = document.getElementById('result').textContent = result;

 }

