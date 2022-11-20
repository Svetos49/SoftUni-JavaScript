// function search() {
//   let listItems = document.querySelectorAll('#towns>li');
//   let input = document.querySelector('input').value;
//   let result = document.getElementById('result');
  
//   let sum = 0;
  
  
//   for(const li of listItems) {
//      if(li.textContent.includes(input)) {
//         li.style.fontWeight = 'bold';
//         li.style.textDecoration = 'underline';
//         sum++;
//      } else {
//       li.style.fontWeight = '';
//       li.style.textDecoration = '';
//      }
//   }
//    result.textContent = `${sum} matches found`
// }

function search() {
   // 1. Select elements
   let searchElement = document.getElementById('searchText');
   let allLiElements = Array.from(document.querySelectorAll('#towns li'));
   // 2. Parse serch text
   let searchText = searchElement.value;
   // 3. Main logic
      //a. clear results from previos search
        allLiElements.forEach(el => {
           el.style.fontWeight = 'normal';
           el.style.textDecoration = 'none';
         });

      // b. filter all li's which contain the serch text
      // c. bold and underline matching li
       let targetLis = allLiElements
       .filter(x => x.textContent.includes(searchText))
       .map(x => {
         x.style.fontWeight = 'bold';
         x.style.textDecoration = 'underline';
       });
       searchElement.value = '';
      // d. show number of matches in result div
      let resultDiv = document.getElementById('result');
      resultDiv.textContent = `${targetLis.length} matches found`;
}