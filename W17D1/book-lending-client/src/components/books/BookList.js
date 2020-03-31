import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS } from '../../graphql/queries';
import './BookDetails.css';

export default () => {
    const { data, loading, error } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <ul className="book-list">
            {data.books && data.books.map(book => (
                <li key={book._id}>
                    <Link to={`/books/${book._id}`}>
                        {book.title}  By:  {book.author.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};