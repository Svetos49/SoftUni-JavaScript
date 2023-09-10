import { deleteFurniture, getOneFurniture } from "../api/furniture.js";
import { furnitureDetailsTemplate } from "../templates/furniture-details-template.js";
import { getUserData } from "../utils/user-data.js";

export async function renderFurnitureDetailsPage(ctx) {
    const userId = (getUserData() || {}).id;
    const furnitureId = ctx.params.id;
    const furnitureData = await getOneFurniture(furnitureId);
    ctx.render(furnitureDetailsTemplate(furnitureData, userId, onDelete.bind(null, ctx)));
}

async function onDelete(ctx, e) {
    e.preventDefault();
    const furnitureId = e.currentTarget.dataset.id;

    await deleteFurniture(furnitureId);
    ctx.page.redirect('/');
}
