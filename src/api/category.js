import {API} from '../config'

export const createCategory=(token,name)=>{
    console.log(JSON.stringify(name))
    return fetch(`${API}/category/create`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify({name:name})
    })
    .then(response=>{return response.json()})

    .catch(err=>console.log(err))
}