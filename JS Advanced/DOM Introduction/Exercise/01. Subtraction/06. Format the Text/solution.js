function solve() {
  // 1.Select element
  let textAreaElement = document.getElementById('input');
  // 2.Extract text from text area
  let text = textAreaElement.value;
  // 3.Split text by '.' to get sentances
  let sentences = text.split('.').filter(x => x !== '').map(x => x + '.');
  // 4.Group sentences by 3 in paragraphs
    // let paragraphSentences = [];
    // for(let i = 0; i < sentences.length; i++) {
    //   let paragraphIndex = Math.trunc(i / 3);
    //   paragraphSentences[paragraphIndex] = paragraphSentences == undefined ? sentences[i]
    //    : paragraphSentences[paragraphIndex] + sentences[i];
    //}
    
    let paragraphRoof = Number(Math.ceil(sentences.length / 3));
   
  // 5.Insert paragraphs into DOM
  let resultDiv = document.getElementById('output')
  for(let i = 0; i < paragraphRoof; i++) {
    resultDiv.innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`
}

}



// function  solve() {
//   let inputElement = document.getElementById('input');
//   let textArr = inputElement.value.split('.').filter((s) => s !== '');
//   let resultDiv = document.getElementById('output');

//   while(textArr.length > 0) {
//     let text = textArr.splice(0, 3).join('. ') + '.';
//     let pEl = document.createElement('p');
//     pEl.textContent = text;
//     resultDiv.appendChild(pEl);
//   }
//}