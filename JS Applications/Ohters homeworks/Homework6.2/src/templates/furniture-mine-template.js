import { html } from "../utils/lib.js";
import { furnitureCardTemplate } from "./furniture-card-template.js";

export const furnitureMineTemplate = (furnitures) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furnitures.map(x => html`${furnitureCardTemplate(x)}`)}
        </div>
    </div>
`;
