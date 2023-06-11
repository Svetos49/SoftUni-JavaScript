import { html, render } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');
const input = document.getElementById('towns');

const loadBtn = document.getElementById('btnLoadTowns');
loadBtn.addEventListener('click', loadTowns);

const townTemplate = (towns) => html`
<ul>${towns.map(t => html`<li>${t}</li>`)}</ul>`;

function loadTowns(event) {
    event.preventDefault();
    const towns = input.value.split(',').map(t => t.trim());
    render(townTemplate(towns), root);
};