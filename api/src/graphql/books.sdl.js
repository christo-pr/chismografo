export const schema = gql`
  type Book {
    id: Int!
    code: String!
    owner: String!
    questions: [Question]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    books: [Book]
    book(id: Int!): Book
  }

  input BookInput {
    code: String
    owner: String
    questions: [Int]
    updatedAt: DateTime
  }

  type Mutation {
    createBook(input: BookInput!): Book
    updateBook(id: Int!, input: BookInput!): Book
    deleteBook(id: Int!): Book
  }
`
