import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from '../03.Search-in-List/towns.js';

let allTowns = document.getElementById('towns');
let searchTextInput = document.getElementById('searchText');
let searchBtn = document.getElementById('search');
let resultDiv = document.getElementById('result');

let townsTemplate = (towns) => html`
<ul>
    ${towns.map((town) => html`<li>${town}</li>`)}
</ul>
`;

render(townsTemplate(towns), allTowns)

searchBtn.addEventListener('click', search);

function search() {
    let result = 0;
    let searchCriteria = searchTextInput.value;

    allTowns.querySelectorAll('li').forEach(town => {
        if (town.textContent.includes(searchCriteria)) {
            town.classList.add('active');
            result++;
        }
        else {
            town.classList.remove('active');
        }
    });

    resultDiv.textContent = result == 1 ? `${result} match found` : `${result} matches found`;

}
