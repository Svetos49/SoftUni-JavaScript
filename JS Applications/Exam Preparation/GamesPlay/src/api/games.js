import * as api from './api.js';

const endpoints = {
    resent: '/data/games?sortBy=_createdOn%20desc&amp;distinct=category',
    games: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    byId: '/data/games/',
    deleteById: '/data/games/'
}

export async function getResent() {
    return api.get(endpoints.resent);
}

export async function getAll() {
   return api.get(endpoints.games);
}

export async function getById(id) {
    return api.get(endpoints.byId + id);
}

export async function create(data) {
   return api.post(endpoints.create, data);
}

export async function deleteById(id) {
    return api.del(endpoints.deleteById + id);
}