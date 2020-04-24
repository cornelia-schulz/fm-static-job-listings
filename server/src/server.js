const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { db } = require('./db');

const server = new ApolloServer({
  typeDefs,
  context() {
    return { db }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});