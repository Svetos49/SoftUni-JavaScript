function sumTable() {
    let tableElements = [...document.querySelectorAll('table tr')];
    let sum = 0;
    tableElements.forEach((el, i) => {
       
         if(i >= 1 && i < tableElements.length - 1) {
           const cols = tableElements[i].children;
            sum += Number(cols[cols.length - 1].textContent);
         }
  });
   document.getElementById('sum').textContent = sum; 
}