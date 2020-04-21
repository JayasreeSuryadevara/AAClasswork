import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {CURRENT_USER} from '../../graphql/queries';
import ReturnBookButton from '../../components/books/ReturnBookButton';

export default () => {
    const {data, loading, error}  = useQuery(CURRENT_USER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data || !data.me) return <p>Not Found</p>;

    const user = data.me;


    return (
        <div className="user-profile">
            <h1>Welcome: {user.username}</h1>
            <p>Borrowed books</p>
            <ul>
                {user.books && user.books.map(book => 
                    <li key={book._id}>
                        <Link to={`/books/${book._id}`}>{book.title}</Link>
                        <ReturnBookButton book={book}/>
                    </li>
                )}
            </ul>
        </div>
    )

}
