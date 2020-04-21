import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { BORROW_BOOK } from '../../graphql/mutation';
import { CURRENT_USER } from '../../graphql/queries';
import { Redirect } from 'react-router-dom';

const redirectToProfile = () => {
  return (
    <Redirect to={`/me`} />
  )
}

export default ({ book }) => {
    const [ borrowBook ] = useMutation(
        BORROW_BOOK,
        {
            variables: {
                bookId: book._id
            },
            update(cache, { data: { borrowBooks: { books } } }) { 
                const { me } = cache.readQuery({ query: CURRENT_USER });
                const newMe = Object.assign({}, me);
                newMe.books = newMe.books.concat(books);
                cache.writeQuery({ query: CURRENT_USER, data: {me: newMe} });
            },
            onError() {}
        }
    );

    return (
      <>
        <button type="submit" onClick={() => {borrowBook(); redirectToProfile()}}>Check Out</button>
      </>
    )

}