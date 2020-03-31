import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IS_LOGGED_IN } from '../../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import BookIndex from '../../pages/BookIndex';

export default ({ path, component: Component, exact }) => {
    const { data, loading, error } = useQuery(IS_LOGGED_IN);
    if (!data || loading || error) {
        return null;
    }
    const userIsLogged = data.isLoggedIn;

    if (userIsLogged) {
        return (
            <Redirect to="/" component={BookIndex} />
            )
    } else {
        return (
        <Route exact={exact} path={path} component={Component} />
        )   
    }
};