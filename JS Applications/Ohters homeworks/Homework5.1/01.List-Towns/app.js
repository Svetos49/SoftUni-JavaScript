import { html, render } from '../node_modules/lit-html/lit-html.js';

let townsInput = document.getElementById('towns');
let loadTownButton = document.getElementById('btnLoadTowns');
let root = document.getElementById('root');

let townTemplate = (towns) => html`
 <ul>
     ${towns.map((town) => html`<li>${town}</li>`)}
 </ul>
`;

loadTownButton.addEventListener('click', (e) => {
    e.preventDefault();
    let towns = townsInput.value;
    let separatedTowns = towns.split(', ');
    render(townTemplate(separatedTowns),root);
    townsInput.value = '';
});

