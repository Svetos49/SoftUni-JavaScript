import { getUserData } from "../utils/user-data.js";

export function updateNav() {
    let user = getUserData();

    if (user) {
        document.querySelector('#user').style.display = 'inline';
        document.querySelector('#guest').style.display = 'none';
    } else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'inline';
    }
}