import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { RETURN_BOOK } from '../../graphql/mutation';
import { CURRENT_USER } from '../../graphql/queries';

export default ({ book }) => {
    const [ returnBook ] = useMutation(
        RETURN_BOOK,
        {
            variables: {
                bookId: book._id
            },
            update(cache, { data: { returnBook: { books } } }) { 
                const { me } = cache.readQuery({ query: CURRENT_USER });
                const newMe = Object.assign({}, me);
                newMe.books = newMe.books.filter(currentBook => {
                  if (currentBook._id !== book._id) return currentBook;
                });
                cache.writeQuery({ query: CURRENT_USER, data: {me: newMe} });
            },
            onError() {}
        }
    );

    return (
      <>
        <button type="submit" onClick={returnBook}>Return Book</button>
      </>
    )

}