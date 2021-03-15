import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import AdminRoute from './auth/AdminRoute'
import PrivateRoute from './auth/PrivateRoute'



import Signin from './user/Signin'
import Signup from './user/Signup'
import Home from './core/Home'
import Entry from './core/Entry'
import Category from './core/Category'

const Routes =()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Signin}   />
                <PrivateRoute path="/home" excat component={Home} />
                <PrivateRoute path="/entry" excat component={Entry} />
                <PrivateRoute path="/category" excat component={Category} />                
                <Route path="/signup" excat component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes