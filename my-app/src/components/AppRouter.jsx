import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { AuthContext } from '../context'
import { privateRoutes, publicRoutes,  } from '../router'
import Loader from './UI/loader/Loader';

function AppRouter() {
    const {isAuth, isLoading} = useContext(AuthContext);
    if(isLoading ){
        return <Loader/>
    }
    return (
        isAuth
            ? 
            <Switch>
                {privateRoutes.map(route => 
                    <Route 
                        component={route.component}
                        path={route.path}
                        exact = {route.exact}
                        key = {route.path}
                    />
                )}
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route => 
                    <Route 
                        component={route.component}
                        path={route.path}
                        exact = {route.exact}
                        key = {route.path}
                    />
                )}
        <Redirect to='/login'></Redirect>
      </Switch>
    )
}

export default AppRouter
