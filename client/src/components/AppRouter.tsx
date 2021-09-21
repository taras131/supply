import React, {FC} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {authRoutes, publicRoutes} from "../router";

const AppRouter: FC = () => {
    const{isAuth} = useTypedSelector(state=>state.auth)
    return (
        isAuth
        ?
            <Switch>
                {authRoutes.map(item=>
                    <Route key ={item.path} path={item.path} exact={item.exact} component={item.component}/>
                )}
            </Switch>
        :
            <Switch>
                {publicRoutes.map(item=>
                    <Route key ={item.path} path={item.path} exact={item.exact} component={item.component}/>
                )}
            </Switch>
    );
};

export default AppRouter;