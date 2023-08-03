import {html} from '../../node_modules/lit-html/lit-html.js';

import * as petsService from '../api/pets.js';

const dashboardTemplate = (pets) => html`
        <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            
            ${pets.length > 0
            ? pets.map(postCardTemplate)
            : html` <p class="no-pets">No pets in dashboard</p>`
            }

                <!-- <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src="./images/Shiba-Inu.png">
                    </article>
                    <h2 class="name">Max</h2>
                    <h3 class="breed">Shiba Inu</h3>
                    <div class="action">
                        <a class="btn" href="#">Details</a>
                    </div>
                </div>
                <!--If there is no pets in dashboard-->
                <!-- <div> -->
                    <!-- <p class="no-pets">No pets in dashboard</p>
                </div> --> -->
            </div>
        </section>`;

       const postCardTemplate = (pet) => html`
       <div class="animals-board">
                    <article class="service-img">
                        <img class="animal-image-cover" src=${pet.image}>
                    </article>
                    <h2 class="name">${pet.name}</h2>
                    <h3 class="breed">${pet.breed}</h3>
                    <div class="action">
                        <a class="btn" href="/details/${pet._id}">Details</a>
                    </div>
                </div>`; 


export async function dashboardPage(ctx) {
    const pets = await petsService.getPets();
    ctx.render(dashboardTemplate(pets));
}