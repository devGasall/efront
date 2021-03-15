import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'

import {signup} from "../auth/index"

const Signup =()=>{
    const[values,setValues]=useState({
        name:'',email:'',password:'',error:'',redirectToreferrer:false,
    })
    const {name,email,password,error,redirectToreferrer}=values
    
    const handleChange = name => event =>{
        setValues({...values,error:false,[name]: event.target.value})
    }
    
    const showError=()=>(
        <div className="alert alert-danger" style={{display: error?'':'none'}}>
            {error}
        </div>
    )
 
        
        
    
    const redirectUser = () =>{
        if(redirectToreferrer){
                return <Redirect to="/" />
        
        }
    }
    const clickSubmit=(e)=>{
        e.preventDefault()
        setValues({...values,error:""})
        console.log(name,email,password)
        signup({name,email,password})
        .then(data=>{
            console.log(data)
            if(data.err){
                console.log(data)
                setValues({...values, error : data.err})
            }else{
                setValues({redirectToreferrer:true})
            }
        })
    }

    const signinForm=()=>(
        <form className="mt-5">
            <div class="form-group">
                <label htmlFor="name ">Nom</label>
                <input type="text" class="form-control" placeholder="Entrer votre nom"  value={name} onChange={handleChange('name')} id="name" />
            </div>
            <div class="form-group ">
                <label htmlFor="email">Email</label>
                <input type="email" class="form-control" placeholder="Entrer votre email"  value={email} onChange={handleChange('email')} id="email" />
            </div>
            <div class="form-group ">
                <label htmlFor="password">Password</label>
                <input type="password" class="form-control" placeholder="Entrer votre mot de passe"  value={password} onChange={handleChange('password')} id="password" />
            </div>
            <button onClick={clickSubmit} variant="primary" >Inscription</button>
        </form>
    )
   

    return(
        <div className="container" >
            {redirectUser()}
            {showError()}
            {signinForm()}
        </div>
    )
}
export default Signup