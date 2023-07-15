import * as api from './api.js';

const endpoints = {
    products: '/data/products?sortBy=_createdOn%20desc',
    create: '/data/products',
    byId: '/data/products/'
}

export async function getAll() {
    return api.get(endpoints.products);
}