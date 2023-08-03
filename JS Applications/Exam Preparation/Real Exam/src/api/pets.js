import * as api from './api.js';

const endpoints = {
    pets: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
}

export async function getPets() {
    return api.get(endpoints.pets);
}