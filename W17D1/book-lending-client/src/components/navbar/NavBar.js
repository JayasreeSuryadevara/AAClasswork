import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default () => {
    
    return (
        <div className="navbar">
            <Link to={`/`}>
                Books
            </Link>
            <Link to={`/authors`}>
                Authors
            </Link>
            <Link to={"/login"}>
                Login
            </Link>
            <Link to={"/signup"}>
                SignUp
            </Link>
        </div>
    );
};