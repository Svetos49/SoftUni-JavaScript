window.addEventListener('load', solution);

function solution() {
    let inputBtn = document.getElementById('submitBTN');
    let editBtn = document.getElementById('editBTN');
    let continueBtn = document.getElementById('continueBTN');
    let infoUl = document.getElementById('infoPreview');
    let allBlock = document.getElementById('block');

    let inputValues = Array.from(document.querySelectorAll('#form input'));
    let inputLabels = Array.from(document.querySelectorAll('#form label'));
    inputValues.pop();

    inputBtn.addEventListener('click', sendInput);

    function sendInput(ev) {
        let fullName = inputValues[0];
        let email = inputValues[1];
        if(fullName.value == '' || email.value == '') {
            return;
        }

        for(let i = 0; i < inputValues.length; i++) {
            const liElement = e('li', {}, `${inputLabels[i].innerText} ${inputValues[i].value}`);
            infoUl.appendChild(liElement);
        }
       
      
        for(item of inputValues) {
            item.value = '';
        }

        inputBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;

        editBtn.addEventListener('click', edit);
        continueBtn.addEventListener('click', continues);
        
        function edit(ev) {
         const listItems = Array.from(infoUl.childNodes);
         for(let i = 0; i < inputValues.length; i++) {
            inputValues[i].value = listItems[i].innerText.split(': ')[1];
            listItems[i].remove();

            inputBtn.disabled = false;
            editBtn.disabled = true;
            continueBtn.disabled = true;
         }
        }

        function continues(ev) {
          allBlock.innerText = '';
          let h3 = e('h3', {}, 'Thank you for your reservation!');
          allBlock.appendChild(h3);
        }
    }



    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}
