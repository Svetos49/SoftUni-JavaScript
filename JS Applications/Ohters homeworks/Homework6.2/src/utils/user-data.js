const keyToData = 'userData';

export const setUserData = (data) =>
    sessionStorage.setItem(keyToData, JSON.stringify(data));

export const getUserData = () =>
    JSON.parse(sessionStorage.getItem(keyToData));


export const clearUserData = () =>
    sessionStorage.removeItem(keyToData);
