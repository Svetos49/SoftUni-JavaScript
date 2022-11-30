// function addItem() {
//   // select input field and read input value
//   const text = document.getElementById('newItemText').value;
 
//   // create new <li> element
//   const liElement = document.createElement('li');
//   // set text of new element to input value
//   liElement.textContent = text;
//   // select list from page
//   const ulElement = document.getElementById('items');

//   // append new element to list
//   ulElement.appendChild(liElement);
//   // clean input field
//   document.getElementById('newItemText').value = '';
// }

function addItem() {
  const text = document.getElementById('newItemText').value;
  const liElement = document.createElement('li');
  liElement.textContent = text;
  const ulElement = document.getElementById('items');
  ulElement.appendChild(liElement);
  document.getElementById('newItemText').value = '';

}







