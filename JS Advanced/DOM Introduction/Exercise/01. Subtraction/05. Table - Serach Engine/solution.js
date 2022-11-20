// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);
//    const rows = document.querySelectorAll('tbody tr');

 
  
  
//    function onClick() {
//       const input = document.querySelector('#searchField').value.toLowerCase();
//      console.log('My input', input);
     
//      for(let row of rows) {
//         if(row.textContent.toLowerCase().includes(input)) {
//            row.classList.add('select');
//         } else {
//            row.removeAttribute('class');
//         }
//      }
//    }
// }

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {
      // 1. Select elements
      let searchElement = document.getElementById('searchField');
      let rowElements = Array.from(document.querySelectorAll('tbody tr'));
            // 1A) Extract/parse values
      let searchText = searchElement.value;
           // 1B) Clear styles from previous search 
           rowElements.forEach(el => {
             el.className = '';
           });
      // 2. Find matching row elements to text
      // 3. Modify style for matching rows
      let filterRows = rowElements.filter(el => {
         let values = Array.from(el.children);
         if(values.some(x => x.textContent.includes(searchText))) {
            el.className = 'select';
         }
      })
     
      // 4. Clear text file
      searchElement.value = '';
   }
}



// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);

//    function onClick() {
//       let text = document.getElementById('searchField').value.toLowerCase();
//       let button = document.getElementById('searchBtn').value;
  
//       let tableEl = Array.from(document.querySelectorAll('tbody tr'));
//       tableEl.forEach(el => {
//           el.className = '';
//       });
//       let match = '';
//       for(row of tableEl) {
//           row = Array.from(row.children).forEach((el) => {
//               if(text == el) {
//                 el.style.className = 'select';
//               } else {
//                   text.value = '';
//               }
//           })
//       }
//    }


// }