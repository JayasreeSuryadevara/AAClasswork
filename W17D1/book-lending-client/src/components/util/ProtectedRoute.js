import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IS_LOGGED_IN } from '../../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import LoginUser from '../../pages/LoginUser';

export default ({ path, component: Component, exact}) => {
    const { data, loading, error } = useQuery(IS_LOGGED_IN);
    if (!data || loading || error){
        return null;
    }
    const userIsLogged = data.isLoggedIn;

    if (userIsLogged) {
        return (
            <Route exact={exact} path={path} component={Component} />
        )
    } else {
        return (
            <Redirect to="/login" component={LoginUser} />
        )
    }
};
