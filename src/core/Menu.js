import React,{Fragment} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {signout, isAuthenticated} from '../auth'
const isActive= (history,path)=>{
    if(history.location.pathname === path){
        return{ color:"black"} 
    }else{
        return{color:"white"}
    }
}


const Menu = ({history})=>(
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link style={isActive(history,'/home')} className="nav-link" to="/home">Acceuil</Link>
            </li>
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                        <Link style={isActive(history,'/admin/dashboard')} className="nav-link" to="/admin/dashboard">Dashboard</Link>
                    </li>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 0 && (    
                <li className="nav-item">
                    <Link style={isActive(history,'/Category')} className="nav-link" to="/category">Category</Link>
                </li>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link style={isActive(history,'/cashier/dashboard')} className="nav-link" to="/cashier/dashboard">Dashboard</Link>
                </li>
            )}
            {isAuthenticated() && isAuthenticated().user.role === 2 && (
                <li className="nav-item">
                    <Link style={isActive(history,'/seller/dashboard')} className="nav-link" to="/seller/dashboard">Dashboard</Link>
                </li>
            )}
           
            

            <li className="nav-item">
                <Link style={isActive(history,'/shop')} className="nav-link" to="/shop">Boutique</Link>
            </li>
            <li>
                <Link style={isActive(history,'/sell')} className="nav-link" to="/sell">Vente <sup><small className="cart-badge"></small></sup></Link>
            </li>
            {isAuthenticated()&&(
                <Fragment>
                    <li className="nav-item">
                        <span style={{cursor:'pointer',color:'#ffffff'}} className="nav-link" onClick={()=>signout(()=>{history.push("/")})}>Signout</span>
                    </li>
                </Fragment>
            )}
        </ul>
    </div>
)
export default withRouter(Menu)