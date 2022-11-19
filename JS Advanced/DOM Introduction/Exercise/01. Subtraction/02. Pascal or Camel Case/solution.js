function solve() {
  let text = document.getElementById('text').value;
  let naming = document.getElementById('naming-convention').value;
  let resultContainer = document.getElementById('result')

  const splited = text.split(" ");
  let resultString = '';
  if(naming == "Pascal Case") {
      for(let i = 0; i < splited.length; i++) {
          resultString += splited[i][0].toUpperCase() + splited[i].slice(1).toLowerCase();
      }
  } else if(naming == "Camel Case") {
      resultString += splited[0][0] + splited[0].slice(1).toLowerCase();
      for(let i = 1; i < splited.length; i++) {
          resultString += splited[i][0].toUpperCase() + splited[i].slice(1).toLowerCase();
      }
  } else {
      resultContainer.textContent = 'Error!';
      return;
  }
   resultContainer.textContent = resultString;
}