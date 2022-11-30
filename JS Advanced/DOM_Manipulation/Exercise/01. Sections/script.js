function create(words) {
   const output = document.getElementById('content')
    words.forEach(w => output.appendChild(creatArticle(w)));

   function creatArticle(text) {
      const pE1 = e('p', text);
      pE1.style.display = 'none';
   
      const divE1 = e('div', pE1)
      
   
      divE1.addEventListener('click', (ev) => {
            // ev.target.querySelector('p').style.display = '';
            pE1.style.display = '';
      });
      return divE1;
   
   }

   

   function e(type, content) {
      const result = document.createElement(type);
      if(typeof content == 'string') {
         result.textContent = content;
      } else {
          result.appendChild(content);
      }
      
      return result;
   }
}