// function focus() {
//    // select all input fields
//    Array.from(document.querySelectorAll('input')).forEach(i => {
//         // add listener for focus event
//        i.addEventListener('focus', onFocus);
//        // add listener for blur event
//        i.addEventListener('blur', onBlur);
//    });
//    function onFocus(ev) {
//    // onFocus -> select input parent -> apply class 'focused'
//      ev.target.parentNode.className = 'focused';
//    }
//     function onBlur(ev) {
//      // onBlur  -> select input parent -> remove class 'focused'
//      ev.target.parentNode.className = '';
//     }
   
//   }


  // function focus() {
  //  const fields = Array.from(document.getElementsByTagName('input'));

  //  for(let field of fields) {
  //       field.addEventListener('focus', onFocus);
  //       field.addEventListener('blur', onBlur);
  //  }

  //  function onFocus(ev) {
  //   ev.target.parentNode.className = 'focused';
  //  }

  //  function onBlur(ev) {
  //   ev.target.parentNode.className = '';
  // }
  // }



  function focus() {
     let inputElements = Array.from(document.querySelectorAll('input'));

     for(let field of inputElements) {
       
       field.addEventListener('focus', (e) => {
         e.target.parentNode.className = 'focused';
       });

       field.addEventListener('blur', (e) => {
         e.target.parentNode.className = '';
       })
     }

   }
 