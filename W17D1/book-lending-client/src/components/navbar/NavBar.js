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
            <Link to={"/me"}>
                Profile
            </Link>
        </div>
    );
};