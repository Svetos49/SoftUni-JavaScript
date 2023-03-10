window.addEventListener('load', solution);

function solution() {
  const submitBtn = document.getElementById('submitBTN');
  const continueBtn = document.getElementById('continueBTN');
  const editBtn = document.getElementById('editBTN');
  const block = document.getElementById('block');
  const previewUl = document.getElementById('infoPreview');

  submitBtn.disabled = false;
  continueBtn.disabled = true;
  editBtn.disabled = true;

  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
  const labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));
  inputValues.pop();
  
  submitBtn.addEventListener('click', (ev) => {
    const fullName = inputValues[0];
    const email = inputValues[1];
    if(fullName.value && email.value != '') {
       for(let i = 0; i < inputValues.length; i++) {
        const liElement = document.createElement('li');
        liElement.innerText = `${labelValues[i].innerText} ${inputValues[i].value}`;
        previewUl.appendChild(liElement);
       }
       
       for(input of inputValues) {
          input.value = '';
       }
       submitBtn.disabled = true;
       continueBtn.disabled = false;
       editBtn.disabled = false;
    }
  });


  editBtn.addEventListener('click', (ev) => {
    const listItems = Array.from(previewUl.childNodes);
    for(let i = 0; i < inputValues.length; i++) {
      inputValues[i].value = listItems[i].innerText.split(': ')[1];
      listItems[i].remove();
    }

    submitBtn.disabled = false;
    continueBtn.disabled = true;
    editBtn.disabled = true;
  });

  continueBtn.addEventListener('click', (ev) => {
    block.innerHTML = '';

    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    block.appendChild(h3);
  })
}
