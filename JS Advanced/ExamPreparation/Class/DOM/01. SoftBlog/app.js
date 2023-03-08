function solve(){
  let createBtn = document.querySelector('.site-content aside button.btn.create');
  createBtn.addEventListener('click', createArticle);

  function createArticle(e) {
   e.preventDefault();

   let authorInput = document.getElementById('creator');
   let titleInput = document.getElementById('title');
   let categoryInput = document.getElementById('category');
   let contentTextarea = document.getElementById('content');

   let articleElement = document.createElement('article');

   let titleHeading = document.createElement('h1');
   titleHeading.textContent = titleInput.value;
   
   let categoryParagraph = document.createElement('p');
   categoryParagraph.textContent = 'Category:';
   let categoryStrong = document.createElement('strong');
   categoryStrong.textContent = categoryInput.value;
   categoryParagraph.appendChild(categoryStrong);

   let creatorParagraph = document.createElement('p');
   creatorParagraph.textContent = 'Creator:';
   let creatorStrong = document.createElement('strong');
   creatorStrong.textContent = authorInput.value;
   creatorParagraph.appendChild(creatorStrong);

   let contentParagraph = document.createElement('p');
   contentParagraph.textContent = contentTextarea.value;

   let buttonsDiv = document.createElement('div');
   buttonsDiv.classList.add('buttons');

   let deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Delete';
   deleteBtn.classList.add('btn', 'delete');
   deleteBtn.addEventListener('click', deleteArticle);

   let archiveBtn = document.createElement('button');
   archiveBtn.textContent = 'Archive';
   archiveBtn.classList.add('btn', 'archive');
   archiveBtn.addEventListener('click', archiveArticle);
   
   buttonsDiv.appendChild(deleteBtn);
   buttonsDiv.appendChild(archiveBtn);

   articleElement.appendChild(titleHeading);
   articleElement.appendChild(categoryParagraph);
   articleElement.appendChild(creatorParagraph);
   articleElement.appendChild(contentParagraph);
   articleElement.appendChild(buttonsDiv);

   let postSection = document.querySelector('.site-content main section');
   postSection.appendChild(articleElement);
   
   }
  
   function deleteArticle(ev) {
     let deleteBtn = ev.target;
     let articleToDelete = deleteBtn.parentElement.parentElement;
     articleToDelete.remove();
   }

   function archiveArticle(ev) {
     let articleToArchive = ev.target.parentElement.parentElement;
     let archiveOl = document.querySelector('.archive-section ol');

     let archiveLists = Array.from(document.querySelectorAll('li'));
     let articleTitleHeading = articleToArchive.querySelector('h1');
     let articleTitle = articleTitleHeading.textContent;
     
     let newTitleLi = document.createElement('li');
     newTitleLi.textContent = articleTitle;

     articleToArchive.remove();

     archiveLists.push(newTitleLi);
     archiveLists.sort((a, b) => a.textContent.localeCompare(b.textContent))
     .forEach(li => archiveOl.appendChild(li));
   }

}
