function addItem() {
    let inputEl = document.getElementById('newText').value;
    let createLi = document.createElement('li');
    let createBtn = document.createElement('a');
    createBtn.href = '#';
    createBtn.textContent = '[Delete]';
    createLi.textContent = inputEl;
    createLi.appendChild(createBtn);
    let listItems = document.getElementById('items');
    listItems.appendChild(createLi);
 
   createBtn.addEventListener('click', (ev) => {
     ev.target.parentNode.remove();
   })
   document.getElementById('newText').value = '';

}

  
 