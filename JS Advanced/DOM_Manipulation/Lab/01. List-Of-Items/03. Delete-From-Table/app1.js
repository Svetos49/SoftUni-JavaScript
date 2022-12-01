function deleteByEmail() {
    // select input field and read value
    const input = document.querySelector('input[name = "email"]')
    // get tbody children
    const rows = Array.from(document.querySelector('tbody').children);
    let removed = false;
    // repeat for every row:
    // -- celect second cell
    // -- if textContent matches input value -> remove row
      for(let row of rows) {
          if(row.children[1].textContent == input.value) {
              row.remove();
              removed = true;
          }
      }
    // if there is match print 'Deleted.'
    // otherwise print 'Not found.'
    if(removed) {
      document.getElementById('result').textContent = 'Deleted.';
    } else {
     document.getElementById('result').textContent = 'Not found.';
    }
 
 }


 function deleteByEmail() {
  let email = document.querySelector('input[name="email"]');
  let rows = Array.from(document.querySelectorAll('tbody tr'));
  let removed = false;
   for(let row of rows) {
      if(row.children[1].textContent == email.value) {
        row.remove();
        removed = true;
      }

   }
   if(removed) {
     document.getElementById('result').textContent = 'Deleted';
   } else {
    document.getElementById('result').textContent = 'Not found'
   }
  
}
     

