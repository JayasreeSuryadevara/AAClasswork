import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default () => {
    
    return (
        <div className="navbar">
            <Link to={`/books`}>
                Books
            </Link>
            <Link to={`/authors`}>
                Authors
            </Link>
        </div>
    );
};