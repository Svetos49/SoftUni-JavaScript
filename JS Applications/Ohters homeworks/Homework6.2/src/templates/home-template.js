import { html } from "../utils/lib.js";
import { furnitureCardTemplate } from "./furniture-card-template.js";

export const homeTemplate = (furnitures) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furnitures.map(x => html`${furnitureCardTemplate(x)}`)}
        </div>
    </div>
`;
