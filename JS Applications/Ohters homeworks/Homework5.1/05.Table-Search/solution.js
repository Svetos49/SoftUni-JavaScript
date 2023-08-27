import { html, render } from '../node_modules/lit-html/lit-html.js';

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let url = `http://localhost:3030/jsonstore/advanced/table`;
   let tbody = document.getElementById('tbody');
   let searchCriteriaInput = document.getElementById('searchField');

   let itemTemplate = (data) => html`
      ${data.map((item) => html`
      <tr>
         <td>${item[1]['firstName']} ${item[1]['lastName']}</td>
         <td>${item[1]['email']}</td>
         <td>${item[1]['course']}</td>
      </tr>
      `)}
   `;

   loadAllItems();

   function loadAllItems() {
      fetch(url)
         .then(res => res.json())
         .then(data => {
            let entries = Object.entries(data);
            render(itemTemplate(entries), tbody);
         })
         .catch(error => console.log(error))
   }

   function onClick(e) {
      e.preventDefault();

      let searchCriteria = searchCriteriaInput.value.toLowerCase();
      let items = document.querySelectorAll('tbody tr');

      for (const item of items) {
         if (doesInclude(item.children, searchCriteria)) {
            item.classList.add('select');
         }
         else {
            item.classList.remove('select');
         }
      }

      searchCriteriaInput.value = '';

   }
   function doesInclude(tr, searchCriteria) {
      for (const tableRow of tr) {

         if (tableRow.textContent.toLocaleLowerCase().includes(searchCriteria)) {
            return true;
         }

      }
   }
}
solve();