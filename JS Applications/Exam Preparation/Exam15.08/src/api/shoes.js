import * as api from './api.js';

const endpoints = {
    allShoes: '/data/shoes?sortBy=_createdOn%20desc'
}

export async function getAll() {
    return api.get(endpoints.allShoes);
}