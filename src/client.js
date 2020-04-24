import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';

const http = new HttpLink({uri: 'http://localhost:4000'});
const link = ApolloLink.from([
  http
]);
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache
});

export default client;