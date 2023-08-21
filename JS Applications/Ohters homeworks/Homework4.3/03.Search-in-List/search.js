import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";


const root = document.getElementById('towns');
const result = document.getElementById('result');
const input = document.getElementById('searchText');
document.querySelector('button').addEventListener('click', onSearch);

const townsTemplate = (towns) => html`
<ul>${towns.map(t => html`<li class=${t.match ? 'active' : '' }>${t.name}</li>`)}</ul>`;

const cities = towns.map(t => ({ name: t, match: false }));

update();

function update() {
   render(townsTemplate(cities), root);
};
function onSearch() {
   let matches = 0;
   const value = input.value.toLocaleLowerCase();

   if (value) {
      let match = cities.filter(t => t.name.toLocaleLowerCase().includes(value) ? t.match = true : t.match = false);
      matches = match.length;

   } else {
      cities.forEach(c => c.match = false);
   };
   update();
   result.textContent = `${matches} matches found`;
};
