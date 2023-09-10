import { getAllUserFurnitures } from "../api/furniture.js";
import { furnitureMineTemplate } from "../templates/furniture-mine-template.js";
import { getUserData } from "../utils/user-data.js";

export async function renderFurnitureMinePage(ctx) {
    const userId = (getUserData() || {}).id;
    const myFurnitures = await getAllUserFurnitures(userId);
    ctx.render(furnitureMineTemplate(myFurnitures));
}
