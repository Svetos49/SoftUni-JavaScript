// function toggle() {
//     const button = document.querySelector('.button');
//     let divExtra = document.querySelector('#extra');
//     divExtra.style.display = divExtra.style.display == 'none' || divExtra.style.display == '' ? 'block' : 'none';
//    button.textContent = button.textContent === 'More' ? 'Less': 'More';
// }

function toggle() {
   // 1. Select elements
   let button = document.getElementsByClassName('button')[0];
   let textDiv = document.getElementById('extra');
   // 2. Show/Text and change button text
      // a. change button text
      button.textContent = button.textContent == 'More' ? 'Less' : 'More';
      // b. show/hide content
      textDiv.style.display = textDiv.style.display == 'block' ? 'none' : 'block'; 
}

