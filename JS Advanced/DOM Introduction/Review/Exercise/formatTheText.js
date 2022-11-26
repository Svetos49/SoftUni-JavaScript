function  solve() {
    let inputElement = document.getElementById('input');
    let textArr = inputElement.value.split('.').filter((s) => s !== '');
    let resultDiv = document.getElementById('output');
  
    while(textArr.length > 0) {
      let text = textArr.splice(0, 3).join('. ') + '.';
      let pEl = document.createElement('p');
      pEl.textContent = text;
      resultDiv.appendChild(pEl);
    }
  }