export let settings = {
    host:''
}

export async function request(url, method, dataObj, token){
    let options;
    if (token){
        options = {
            method:method, 
            headers:{'Content-type': 'application/json', 'X-Authorization':token },
            body: JSON.stringify(dataObj),
           }
    }
    else{
        options = {
            method:method, 
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(dataObj),
           }
    }
        try{
            const response = await fetch(url, options)
    
            if (response.ok == false){
                const error = await response.json()
                alert(error.message)
                throw new Error(error.message)
            }
            try{
                const data = await response.json()
                return data
            }
            catch(err){
                return response
            }
        } 
    catch (err){
        alert (err.message)
        throw(err)
    }  

}

async function setSessionStorage(response){
    const result = await response
    sessionStorage.setItem('email', result.email)
    sessionStorage.setItem('authToken', result.accessToken)
    sessionStorage.setItem('userId', result._id)
    return result
}

async function removeSessionStorage(response){
    const result = await response
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('authToken')
    sessionStorage.removeItem('userId')

}

export async function login(email, password){
    let dataOBJ = {
        email:email,
        password: password
    }
    return setSessionStorage(request(settings.host + '/users/login', 'post', dataOBJ))
}

export async function register(email, password){
    let dataOBJ = {
        email:email,
        password: password
    }
    return setSessionStorage(request(settings.host + '/users/register', 'post', dataOBJ))
}
export async function logout(){

    sessionStorage.removeItem('email')
    sessionStorage.removeItem('authToken')
    sessionStorage.removeItem('userId')

    await fetch (settings.host + '/users/logout')

}
