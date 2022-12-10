function deleteByEmail() {
   // select input field and read value
   const input = document.querySelector('input[name = "email"]')
   // get tbody children
   const rows = Array.from(document.querySelector('tbody').children)
               .filter(r => r.children[1].textContent = input.value);
               
               rows.forEach(r => r.remove())
   //let removed = false;
   // repeat for every row:
   // -- celect second cell
   // -- if textContent matches input value -> remove row
    // for(let row of rows) {
    //      if(row.children[1].textContent == input.value) {
    //          row.remove();
    //          //removed = true;
    //      }
    //  }
   // if there is match print 'Deleted.'
   // otherwise print 'Not found.'
  //  if(removed) {
  //    document.getElementById('result').textContent = 'Deleted.';
  //  } else {
  //   document.getElementById('result').textContent = 'Not found.';
  //  }

  document.getElementById('result').textContent = rows.length > 0 ? 'Deleted': 'Not found'; 

  // if(rows.length > 0) {
  //   document.getElementById('result').textContent = 'Deleted.';
  // } else {
  //   document.getElementById('result').textContent = 'Not found.';
  // }

}