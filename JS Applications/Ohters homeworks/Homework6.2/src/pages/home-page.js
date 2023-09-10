import { homeTemplate } from "../templates/home-template.js";
import { getAllFurnitures } from "../api/furniture.js";

export async function renderHomePage(ctx) {
    const furnitures = await getAllFurnitures();
    ctx.render(homeTemplate(furnitures));
}
