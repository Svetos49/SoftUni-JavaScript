import { html } from "../utils/lib.js";

export const furnitureDetailsTemplate = (data, userId, onDelete) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        ${ data.img.startsWith('.')
                            ? html`<img src=${data.img.substring(1)} />`
                            : html`<img src=${data.img} />`
                        }
                        
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${data.make}</span></p>
                <p>Model: <span>${data.model}</span></p>
                <p>Year: <span>${data.year}</span></p>
                <p>Description: <span>${data.description}</span></p>
                <p>Price: <span>${data.price}$</span></p>
                ${ data.material
                    ? html`<p>Material: <span>${data.material}</span></p>`
                    : null
                }
                
                ${ data._ownerId !== userId
                    ? null
                    : html`
                        <div>
                            <a href="/edit/${data._id}" class="btn btn-info">Edit</a>
                            <a class="btn btn-red" data-id=${data._id} @click=${onDelete}>Delete</a>
                        </div>
                      `
                }
                
            </div>
        </div>
    </div>
`;