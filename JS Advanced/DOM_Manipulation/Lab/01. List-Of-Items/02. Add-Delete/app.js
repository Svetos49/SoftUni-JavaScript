// function addItem() {
//     // create li
//     const input = document.getElementById('newText');
//     const liElement = createElement('li', input.value);

//     // add delete button
//     const deleteBtn = createElement('a', '[Delete]');
//     deleteBtn.href = '#';
//     deleteBtn.addEventListener('click', (ev) => {
//            ev.target.parentNode.remove();
//     })
//     liElement.appendChild(deleteBtn);

//    // add new <li> to document
//     document.getElementById('items').appendChild(liElement);
//     input.value = '';

//     function createElement(type, content) {
//         const element = document.createElement(type);
//         element.textContent = content;
//         return element;
//     }
//   }

function addItem() {
    const input = document.getElementById('newText');
    const liElement = createElement('li', input.value);
    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();

    })

    document.getElementById('items').appendChild(liElement);
    input.value = '';


}
  

    






   
