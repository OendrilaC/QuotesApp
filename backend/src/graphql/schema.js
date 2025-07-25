import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    verified:Boolean!
    refreshToken: String!
    accessToken: String!
  }

  type Mutation {
    registerUser(name: String!, email: String!,password:String!): User
    loginUser(email: String!, password: String!): User
    verifyEmail(token: String!): String
  }
  
  type Query {
    hello: String
  }
`);
