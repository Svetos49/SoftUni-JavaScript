import { html, render } from '../node_modules/lit-html/lit-html.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import { cats } from './catSeeder.js';

const catsSection = document.getElementById('allCats');

catsSection.addEventListener('click', toggle);

const catTemplate = (data) => html`
<ul>
${data.map(cat => html`
<li>
<img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
<div class="info">
<button class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
<div class="status" style=${styleMap(cat.info ? { display: 'block' } : { display: 'none' })} id="${cat.id}">
<h4>Status Code: ${cat.statusCode}</h4>
<p>${cat.statusMessage}</p>
</div>
</div>
</li>`)}
</ul>
`;

cats.forEach(c => c.info = false);
update();

function update() {
    const result = catTemplate(cats);
    render(result, catsSection);
}

function toggle(e) {
    const elId = e.target.parentNode.querySelector('.status').id;
    const current = cats.find(c => c.id == elId);

    current.info = !current.info;
    update();
}