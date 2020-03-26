export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String!
    password: String!
    books: Book
    createdAt: DateTime!
    updatedAt: DateTime!
    answers: Answer
  }

  type Query {
    users: [User]
    user(id: Int!): User
  }

  input UserInput {
    email: String
    name: String
    password: String
    books: Int
    updatedAt: DateTime
    answers: Int
  }

  type Mutation {
    createUser(input: UserInput!): User
    updateUser(id: Int!, input: UserInput!): User
    deleteUser(id: Int!): User
  }
`
