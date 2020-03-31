import React from 'react';
import UserDetails from '../components/users/UserDetails';
import { useApolloClient } from '@apollo/react-hooks';

export default () => {
    const client = useApolloClient();

    return  (
        <>
            <UserDetails />
            <button onClick={ () => client.resetStore() }> Log Out </button>
        </>
    )
}