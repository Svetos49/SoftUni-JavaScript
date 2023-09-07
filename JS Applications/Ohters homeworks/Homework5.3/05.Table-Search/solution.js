import { html, render } from '../node_modules/lit-html/lit-html.js';
const url = 'http://localhost:3030/jsonstore/advanced/table';

const template = (data) => html`
    ${data.map(info => html
   `<tr id="${info._id}">
        <td>${info.firstName} ${info.lastName}</td>
        <td>${info.email}</td>
        <td>${info.course}</td>
    </tr>`)}
`;

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let userInput = document.getElementById('searchField').value;
      let tableData = document.querySelectorAll('tbody tr');

      for (const row of tableData) {
         row.classList.remove('select');

         if (userInput !== '' && row.textContent.includes(userInput)) {
            row.className = 'select';
         }
      }

      userInput.value = '';
   }
}

async function generateRows() {
   const tableBody = document.querySelector('.container tbody');

   const response = await fetch(url);
   const data = await response.json();

   render(template(Object.values(data)), tableBody);
}

generateRows();
solve();