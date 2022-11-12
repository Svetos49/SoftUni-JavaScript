function extractText() {
   
    const liElements = [...document.getElementsByTagName('li')];
    const elementText = liElements.map(e => e.textContent);
    document.getElementById('result').value = elementText.join('\n');
}

   
   
// function extractText() {
//     let tableElements = document.getElementById('items');
//     let inputElement = document.getElementById('result');
//     for(element of tableElements) {
//         inputElement.value = element.textContent;
//     }
// }
   
   