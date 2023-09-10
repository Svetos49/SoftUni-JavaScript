import { html } from "../utils/lib.js";

export const furnitureCardTemplate = (data) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                    <img src=${data.img} />
                    <p>${data.description}</p>
                    <footer>
                        <p>Price: <span>${data.price} $</span></p>
                    </footer>
                    <div>
                        <a href="/details/${data._id}" class="btn btn-info">Details</a>
                    </div>
            </div>
        </div>
    </div>
`;