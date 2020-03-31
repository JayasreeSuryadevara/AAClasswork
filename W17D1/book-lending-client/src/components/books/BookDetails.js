import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOK } from '../../graphql/queries';
import './BookDetails.css';


export default ({ bookId }) => {
    const { data, loading, error } = useQuery(
        GET_BOOK,
        {
            variables: {
                bookId
            }
        }
    );

    if (loading) return <p>Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    if (!data.book) return <p>Book not Found</p>;

    const book = data.book;
    return (
      <div className="book-show">
        <h1>{book.title}</h1>
        <p> by: {"  "}
            <Link to={`/authors/${book.author._id}`}>
              {book.author.name}
            </Link>
        </p> 
        {book.isBooked ? 
            <p>Already checked out</p> 
            :
            <p>Available</p>
        }
      </div>
    );
};