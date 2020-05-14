import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';

// const http = new HttpLink({uri: 'http://localhost:9000'});
const http = new HttpLink({ uri: '/.netlify/functions/apollo'})
const link = ApolloLink.from([
  http
]);
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache
});

export default client;