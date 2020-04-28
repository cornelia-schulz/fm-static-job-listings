const { gql } = require('apollo-server');

const typeDefs = gql`
  type Job {
    id: ID!
    company: String
    new: Boolean
    featured: Boolean
    jobtitle: String
    posted: String
    type: String
    location: String
    role: String
    level: String
    languages: [String]
    tools: [String]
    image: String
  }

  type Query {
    jobs: [Job]
    job(id: ID!): Job!
}
`

module.exports = typeDefs