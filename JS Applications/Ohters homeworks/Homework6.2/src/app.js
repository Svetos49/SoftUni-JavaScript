import { updateNav } from "./auth/update-nav.js";
import { render, page } from "./utils/lib.js";
import { logout } from "./auth/users.js";
import { renderRegisterPage } from "./pages/register-page.js";
import { renderLoginPage } from "./pages/login-page.js";
import { renderHomePage } from "./pages/home-page.js";
import { renderFurnitureDetailsPage } from "./pages/furniture-details-page.js";
import { renderFurnitureEditPage } from "./pages/furniture-edit-page.js";
import { renderFurnitureCreatePage } from "./pages/furniture-create-page.js";
import { renderFurnitureMinePage } from "./pages/furniture-mine-page.js";

const root = document.getElementById('root');
updateNav();

page(decorateContext);

page('/', renderHomePage);
page('/create', renderFurnitureCreatePage);
page('/my-furniture', renderFurnitureMinePage);

page('/details/:id', renderFurnitureDetailsPage);
page('/edit/:id', renderFurnitureEditPage);

page('/login', renderLoginPage);
page('/register', renderRegisterPage);
page('/logout', onLogout);
// ADD PATHS

page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}

async function onLogout(ctx) {
    await logout();
    updateNav();
    ctx.page.redirect('/');
}
