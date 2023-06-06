import { html, render } from '../node_modules/lit-html/lit-html.js';

const getAll = async () => await (await fetch(url)).json();
const compare = (x, y) => Object.values(x).map(x => x.toLowerCase()).some(x => x.includes(y));
const [main, url] = [document.querySelector('tbody'), 'http://localhost:3030/jsonstore/advanced/table'];
const [btn, search] = [document.getElementById('searchBtn'), document.getElementById('searchField')];
const notification = document.querySelector('.notification');

btn.addEventListener('click', onClick);

const start = async (match) => {
   const data = await getAll();
   render(Object.values(data).map(x => rowTemplate(x, compare(x, match))), main);
};
start();

const rowTemplate = ({ firstName, lastName, email, course }, match) => html`
<tr class=${match ? 'select' : ''}>
   <td>${firstName} ${lastName}</td>
   <td>${email}</td>
   <td>${course}</td>
</tr>`;

function onClick() {
   try {
      const match = search.value.toLowerCase();
      if (match == '') { throw new Error('Input field is required!'); }
      start(match);

   } catch (error) {
      notify(notification,'Input field is required!');
   }
}

function notify(ref, message) {
   ref.textContent = message;
   ref.style.backgroundColor = '#FB667A';
   setTimeout(() => [ref.textContent = '', ref.style.backgroundColor = ''], 2000);
}