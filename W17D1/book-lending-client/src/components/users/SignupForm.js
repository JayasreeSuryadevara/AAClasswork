import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import { IS_LOGGED_IN, CURRENT_USER } from '../../graphql/queries';
import { SIGNUP_USER } from '../../graphql/mutation';


export default () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [signup, { loading, error }] = useMutation(
        SIGNUP_USER,
        {
            variables: {
                username,
                password
            },
            update(cache, { data: { signup } }) {
                if (!signup) {
                    setErrorMessage("Invalid username or password");
                } else {
                    // we can either write to the cache directly or refetch the IS_LOGGED_IN query so other components will update properly
                    // cache.writeData({ data: { isLoggedIn: login.loggedIn, me: { _id: login._id, username: login.username } }});
                    localStorage.setItem('token', signup.token);
                }
            },
            onError() {
                setErrorMessage("Signup unsuccessful");
            },
            refetchQueries: [{ query: IS_LOGGED_IN }, { query: CURRENT_USER }]
        }
    )

    return (
        <>
            {errorMessage}
            <form onSubmit={(e) => {
                e.preventDefault();
                signup()
            }}>
                <label>Username
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>Password
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="SignUp" />
            </form>
        </>
    );

}