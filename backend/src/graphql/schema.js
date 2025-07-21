import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    verified:Boolean!
  }

  type Mutation {
    registerUser(name: String!, email: String!,password:String!): User
  }
  
  type Query {
    hello: String
  }
`);
