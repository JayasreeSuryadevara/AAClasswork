import gql from 'graphql-tag';

export const LOGIN_USER = gql `
    mutation LogIn($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            _id
            username
            token
            loggedIn
        }
    }
`;

export const SIGNUP_USER = gql `
    mutation Signup($username: String!, $password: String!) {
        signup(username: $username, password: $password) {
            _id
            username
            token
            loggedIn
        }
    }
`

export const BORROW_BOOK = gql `
    mutation BorrowBook($bookId: ID!) {
        borrowBooks(bookIds: [$bookId]) {
            success
            message
            books {
                _id
                title
                isBooked
            }
        }
    }
`
export const RETURN_BOOK = gql `
    mutation ReturnBook($bookId: ID!) {
        returnBook(bookId: $bookId) {
            success
            message
            books {
                _id
                title
                isBooked
            }
        }
    }
`