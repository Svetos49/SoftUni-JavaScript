import { html } from "../../node_modules/lit-html/lit-html.js";

import * as productService from '../api/product.js';


const catalogTemplate = (products) => html`
  <h2>Products</h2>
        <section id="dashboard">
         ${products.length > 0
                ?products.map(cardTemplate)
                : html`No products yet.`}
        </section>`;

  const cardTemplate = (product) => html`
  </div><div class="product">
            <img src="${product.imageUrl}" alt="example1" />
            <p class="title">
            ${product.name}
            </p>
            <p><strong>Price:</strong><span class="price">${product.price} </span>$</p>
            <a class="details-btn" href="/details/${product._id}">Details</a>
          </div>`;

export async function catalogPage(ctx) {
    const products = await productService.getAll();
   ctx.render(catalogTemplate(products));
}