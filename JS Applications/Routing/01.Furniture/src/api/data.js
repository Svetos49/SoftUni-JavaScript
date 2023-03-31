import {request, login, logout, register, settings} from '../api/api.js'


settings.host = 'http://localhost:3030'
const token = sessionStorage.getItem('authToken')
export async function getFurniture(){
    const url = settings.host + '/data/catalog'
    return await request (url, 'get')
}

export async function getItemById(id){
    const url = settings.host + '/data/catalog/' + id
    return await request (url, 'get')
}

export async function getMyFurniture(){
    const userId = sessionStorage.getItem('userId')
    console.log(userId)
    const url = settings.host + `/data/catalog?where=_ownerId%3D%22${userId}%22`
    return await request (url, 'get')
}

export async function createRecord(dataObj){
    const url = settings.host + '/data/catalog'
    return await request(url, 'post', dataObj, token)
}

export async function editRecord(id, dataObj){
    const url = settings.host + '/data/catalog/' + id
    return await request(url, 'put', dataObj, token)
}

export async function deleteRecord(id){
    const url = settings.host + '/data/catalog/' + id
    return await request(url, 'delete', undefined, token)
}