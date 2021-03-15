import React,{useState} from 'react'
import {signin,isAuthenticated,authenticate} from '../auth'
import {Redirect} from 'react-router-dom'



const Signin =()=>{
    const[values,setValues]=useState({
        email:'sallrazak78@gmail.com',password:'abdoul07@',error:'',redirectToreferrer:false,
    })
    const {email,password,error,redirectToreferrer}=values
    const {user}=isAuthenticated()
    
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
            if(user && user.role === 0){
                return <Redirect to="/admin/dashboard" />
            }else if(user && user.role===1){
                 return <Redirect to='/seller/dashbord'  />
            }
            else{
                return <Redirect to="/user/dashboard" />
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/category" />
        }
    }

    const clickSubmit=(e)=>{
        e.preventDefault()
        setValues({...values,error:"",loading:true})
        signin({email,password})
        .then(data=>{
            if(data.err){
                setValues({...values, error : data.err,loading:false})
                return(<div>Error</div>)
            }else{
                authenticate(data,()=>{
                    setValues({...values,redirectToreferrer:true})
                    return(<div>Ok</div>)
                })
                
            }
        })
    }

    const signinForm=()=>(
            <form className="mt-5">
                <div class="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" class="form-control" placeholder="Entrer votre email"  value={email} onChange={handleChange('email')} id="email" />
                </div>
                <div class="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" class="form-control" placeholder="Entrer votre mot de passe"  value={password} onChange={handleChange('password')} id="password" />
                </div>
                <button onClick={clickSubmit} type="button" class="btn btn-primary">Connexion</button>
            </form>
    )
   

    return(
        <div className="container" >
             {redirectUser()}
            {showError()}
           {signinForm()}
           {redirectUser()}
        </div>
    )
}
export default Signin