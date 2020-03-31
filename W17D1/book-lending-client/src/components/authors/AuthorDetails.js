import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHOR } from '../../graphql/queries';


export default ({ authorId }) => {
    const { data, loading, error } = useQuery(
        GET_AUTHOR,
        {
            variables: {
                authorId
            }
        }
    );

    if (loading) return <p>Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    if (!data.author) return <p>Author not Found</p>;

    const author = data.author;
    return (
        <>
            <h1>{author.name}</h1>
            <p> Works: </p>
            <ul>
                {author.books.map(book => (
                    <li key={book._id}>
                        <Link to={`/books/${book._id}`}>
                            {book.title}
                        </Link>
                    </li>
                ))}
            </ul>

        </>
    );
};