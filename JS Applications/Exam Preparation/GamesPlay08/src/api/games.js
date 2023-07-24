import * as api from './api.js';


const endpoints = {
    resent: '/data/games?sortBy=_createdOn%20desc&distinct=category'
}

export async function getRecent() {
   return api.get(endpoints.resent);
}