// function deleteByEmail() {
//    //read input field value
//    const email = document.querySelector('input[name = "email"]').value;
//    //select all tables cell from the last column
//    const rows = Array.from(document.querySelectorAll('body tr'));

//    let deleted = false;
//    //iterate over cells
//    for(let row of rows) {
//     //if text matches input value -> delete row
//     if(row.children[1].textContent == email) {
//    // -- remove row from parentNode
//      row.parentNode.removeChild(row);
//      deleted = true;
//      document.getElementById('result').textContent = 'Deleted.';
//     }
   
//    }
   
  
//    if(deleted != true) {
//      // display result message
//      document.getElementById('result').textContent = 'Not found.';
//    }
//  }
 
 
//  function deleteByEmail() {
//     const email = document.querySelector('input[name = "email"]').value;
//     const rows = Array.from(document.querySelectorAll('body tr'));

//     let deleted = false;
//     for(let row of rows) {
//       if(row.children[1].textContent == email) {
//         row.parentNode.removeChild(row);
//         deleted = true;
//         document.getElementById('result').textContent = 'Deleted.'
//       }
//     }
//     if(deleted != true) {
//       document.getElementById('result').textContent = 'Not found.';
//     }

// }


function deleteByEmail() {
  let inputEmail = document.querySelector('input[name = "email"]').value;
  let cellEmails = document.querySelectorAll('tr td:nth-of-type(2)');
  let resultEl = document.getElementById('result');

  let emails = Array.from(cellEmails);
  let targetEmail = emails.find((m) => m.textContent == inputEmail);
  
  if(targetEmail) {
    targetEmail.parentNode.remove();
    resultEl.textContent = 'Deleted.';
  } else{
    resultEl.textContent = 'Not found.';
  }
}






