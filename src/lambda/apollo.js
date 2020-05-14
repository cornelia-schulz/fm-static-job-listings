const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('./apollo/schema');
const resolvers = require('./apollo/resolvers');
const { models, db } = require('./apollo/db');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { models, db }
  }
});

exports.handler = server.createHandler();