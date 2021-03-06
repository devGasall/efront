import {API} from '../config'

export const signup=user=>{
    return fetch(`${API}/signup`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(Response=>Response.json())

    .catch(err=>console.log(err))
}


export const signin=user=>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(Response=>Response.json())

    .catch(err=>console.log(err))
}


export const authenticate=(data,next)=>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next()
    }
}

export const signout =(next) => {
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt')
        next()
        return fetch (`${API}/signout`,{
            method:"GET"
        })
        .then(response=>{
            console.log('signout',response)
        })
        .catch(err => console.log('error',err))
    }
}

export const isAuthenticated =  () => {
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }else{
        return false
    }
}

//category

export const createCategory=category=>{
    return fetch(`${API}/signup`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(category)
    })
    .then(Response=>Response.json())

    .catch(err=>console.log(err))
}