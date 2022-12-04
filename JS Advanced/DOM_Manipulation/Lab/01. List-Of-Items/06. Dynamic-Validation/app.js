// function validate() {
//     // select input field and add change event listener
//     document.getElementById('email').addEventListener('change', onChange);

//     function onChange(ev) {
//         // onChange validate input
//         const email = ev.target.value;
//         if(/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)) {
//           // if remove class error
//           ev.target.className = '';
//         } else {
//        // else invalid add class error
//           ev.target.className = 'error'; // else remove class error
//        }
//     }
     
//   }

  function validate() {
       
       document.getElementById('email').addEventListener('change', onChange);

       function onChange({target}) {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if(pattern.test(target.value)) {
           target.classList.remove('error');
        } else {
          target.classList.add('error');
        }
        
      } 

  }
       
  