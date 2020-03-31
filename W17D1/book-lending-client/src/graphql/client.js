import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from 'apollo-link';
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { typeDefs, resolvers } from './resolvers';
import { CURRENT_USER } from './queries';

const links = [];

const errorLink = onError(({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            console.group("\x1b[31m%s\x1b[0m", "[GraphQL error] ", "Message: ", message);
            console.log("Location: ", locations);
            console.log("Path: ", path);
            console.log("Extensions: ", extensions)
            console.groupEnd();
        });
    }
    if (networkError) console.log("\x1b[31m%s\x1b[0m", "[Network error]:", networkError);
});
links.push(errorLink);

const httpLink = new HttpLink({
    uri: 'http://localhost:5000/graphql',
    headers: {
        authorization: localStorage.getItem('token')
    }
});

links.push(httpLink);

const createClient = async () => {
    const cache = new InMemoryCache({ dataIdFromObject: object => object._id });
    const client = new ApolloClient({
        cache,
        link: ApolloLink.from(links),
        typeDefs,
        resolvers
    });


    client.onResetStore(() => {
        localStorage.clear();
    });

    // wait to see if there is a current user
    if (localStorage.getItem('token')) {
        await client
            .query({ query: CURRENT_USER })
            .then(({ data }) => {
                console.log(data); // comment this in to see what data returns
                // if there is no data or data.me is null, then reset the cache
                if (!data || !data.me) client.resetStore();
            });
    }

    return client;
};

export default createClient;