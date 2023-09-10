import { get, post, put, del } from "./api.js";

const endpoint = '/data/catalog';
const byOwnerQuery = (userId) => `where=_ownerId%3D%22${userId}%22`;

export const createFurniture = (furnitureData) =>
    post(endpoint, furnitureData);

export const editFurniture = (id, furnitureData) =>
    put(`${endpoint}/${id}`, furnitureData);

export const getAllUserFurnitures = (userId) => get(`${endpoint}?${byOwnerQuery(userId)}`);
export const getAllFurnitures = () => get(endpoint);
export const getOneFurniture = (furnitureId) => get(`${endpoint}/${furnitureId}`);
export const deleteFurniture = (furnitureId) => del(`${endpoint}/${furnitureId}`);
