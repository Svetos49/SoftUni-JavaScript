
import { html } from "../../node_modules/lit-html/lit-html.js";

import * as shoesService from '../api/shoes.js';

const catalogTemplate = (shoes) => html`
< <section id="dashboard">
          <h2>Collectibles</h2>
          <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
          ${shoes.length > 0
          ? shoes.map(cardTemplate) 
          : html` <h2>There are no items added yet.</h2>`
          }
           
          </ul>

          <!-- Display an h2 if there are no posts -->
         
        </section>`;

  const cardTemplate = (shoe) => html`
   <li class="card">
              <img src="${shoe.imageUrl}" alt="eminem" />
              <p>
                <strong>${shoe.brand}</strong><span class="brand">Air Jordan</span>
              </p>
              <p>
                <strong>${shoe.model}</strong
                ><span class="model">4 Retro CARHARTT X EMINEM</span>
              </p>
              <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
              <a class="details-btn" href="">Details</a>
            </li>`;     

export async function catalogPage(ctx) {
    const shoes = await shoesService.getAll();
    ctx.render(catalogTemplate(shoes));
}