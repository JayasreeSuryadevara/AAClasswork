import React from 'react';
import BookDetails from '../components/books/BookDetails';

export default (props) => {
    const { bookId } = props.match.params;

    return (
        <>
            <BookDetails bookId={bookId} />
        </>
    )
}