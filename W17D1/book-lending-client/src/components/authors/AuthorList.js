import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_AUTHORS } from '../../graphql/queries';

export default () => {
    const { data, loading, error } = useQuery(GET_AUTHORS);

    if (loading) return <p>Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    return (
        <ul>
            {data.authors && data.authors.map(author => (
                <li key={author._id}>
                    <Link to={`/authors/${author._id}`}>
                        {author.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};