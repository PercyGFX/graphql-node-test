import { gql } from "apollo-server-express";

const typeDefs = gql`
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

const resolvers = {
  Query: {
    students: () => {
      // Return array of students
      return [
        { id: 1, name: "John", age: 20 },
        { id: 2, name: "Jane", age: 21 },
      ];
    },
    student: (_, { id }) => {
      return { id: id, name: "John", age: 20 };
    },
  },
};

export { typeDefs, resolvers };
