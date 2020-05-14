const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('../../server/schema');
const resolvers = require('../../server/resolvers');
const { models, db } = require('../../server/db');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return { models, db }
  }
});

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

exports.handler = server.createHandler();