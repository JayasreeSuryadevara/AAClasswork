import React from 'react';
import AuthorDetails from '../components/authors/AuthorDetails';

export default (props) => {
    const { authorId } = props.match.params;

    return (
        <>
            <AuthorDetails authorId={authorId} />
        </>
    )
}