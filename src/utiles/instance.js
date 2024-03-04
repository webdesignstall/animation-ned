import { ApolloClient, InMemoryCache } from '@apollo/client';

export function initializeApollo() {
    const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
        cache: new InMemoryCache()
    });

    return client;
}
