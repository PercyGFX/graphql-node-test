import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Student {
    id: Int!
    name: String!
    age: Int!
  }

  type Query {
    students: [Student!]!
    student(id: Int!): Student
  }
`;
