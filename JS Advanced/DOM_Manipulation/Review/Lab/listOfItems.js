function addItem() {
 // select input field and readvalue
 const input = document.getElementById('newItemText');
 // create new <li> element and set its content to input value
 const liElement =  document.createElement('li');
 liElement.textContent = input.value; 
 // select <ul> and append new <li> element
 document.getElementById('items').appendChild(liElement);
 // nice-to-have: clear input field
 input.value = '';
}