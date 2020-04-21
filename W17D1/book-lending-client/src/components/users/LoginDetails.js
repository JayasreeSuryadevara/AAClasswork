import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
// import {IS_LOGGED_IN, CURRENT_USER} from '../../graphql/queries';
import { LOGIN_USER } from '../../graphql/mutation';
import './UserDetails.css';

export default () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [login] = useMutation(
        LOGIN_USER,
        {
            variables: {
                username,
                password
            },
            update(cache, {data: {login}}) {
                if (!login) {
                    setErrorMessage("Invalid credentials");
                }else{
                    // we can either write to the cache directly or refetch the IS_LOGGED_IN query so other components will update properly
                    cache.writeData({ data: { isLoggedIn: login.loggedIn, me: { _id: login._id, username: login.username } }});
                    localStorage.setItem('token', login.token);
                }
            },
            onError() { 
                setErrorMessage("Login unsuccessful");
            },
            // refetchQueries: [{ query: IS_LOGGED_IN }, { query: CURRENT_USER }]
            }
    )

    return (
        <div className="login-profile"> 
        {errorMessage}
        <form onSubmit={(e) => {
            e.preventDefault();
            login()
        }}>
            <label>Username
                <input type="text" onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label>Password
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <input type="submit" value="Login" />
        </form>
        <br />
        <p> Or </p>
        <br />
        <Link to={"/signup"}> Sign Up </Link>
        </div>
    );

}