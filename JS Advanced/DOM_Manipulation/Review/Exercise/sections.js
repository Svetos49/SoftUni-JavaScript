function create(words) {
   // create <div>
   // create <p>
   // set <p> content
   // configure <p> to hidden  (display: none)
   // add <p> to <div>
   // add <div> to page
   // configure <div> eentListener
   const content = document.getElementById('content');

   for(let word of words) {
    const div = document.createElement('div');
    const para = document.createElement('p');
    para.textContent = word;
    para.style.display = 'none';
 
    div.addEventListener('click', reveal);
    div.appendChild(para);
 
    content.appendChild(div);
     }
     
     function reveal(e) {
        e.currentTarget.children[0].style.display = '';
    }
   // delegation
//    function reveal(e) {
//        if(e.target.tagName == 'DIV' && e.target != content) {
//            e.target.children[0].style.display = '';
//        }
//    }
}

  