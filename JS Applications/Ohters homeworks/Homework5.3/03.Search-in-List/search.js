import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const template = (towns, match) => html`
<article>
        <div id="towns">
            <ul>
                ${towns.map(t => liTemplate(t, match))};
            </ul>
        </div>
        <input type="text" id="searchText" />
        <button @click = ${search}>Search</button>
        <div id="result">${countMatches(towns, match)}</div>
    </article>
`;

const liTemplate = (name, match) => html`
<li class = ${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${name}</li>
`;

update();

function update(match = '') {
   const result = template(towns, match);
   render(result, document.body);
}

function search() {
   const match = document.getElementById('searchText').value;
   update(match);
}

function countMatches(towns, match) {
   const matches = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length;
   return `${matches} matches found`;
}

